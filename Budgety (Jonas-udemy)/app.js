// BUDGET CONTROLLER
var budgetController = (function() {
    var Income = function(id, description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Expense = function(id, description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0
    }

    var persistData = function() {
        localStorage.setItem('allItems', JSON.stringify(data.allItems));
    }

    var readStorage = function() {
        var storage = JSON.parse(localStorage.getItem('allItems'));
        if (storage) {
            var parsedInc = storage.inc.map(incObj => new Income(incObj.id, incObj.description, incObj.value));
            var parsedExp = storage.exp.map(expObj => new Expense(expObj.id, expObj.description, expObj.value));
            data.allItems.inc = parsedInc;
            data.allItems.exp = parsedExp;
        }
    }

    var calculateTotal = function(type) {
        var sum = data.allItems[type].reduce((sum,cur) => (sum + cur.value), 0);
        data.totals[type] = sum;
    }

    return {
        addItem: function(type, desc, value) {
            var newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'inc') {
                newItem = new Income(ID, desc, value);
            } else if (type === 'exp') {
                newItem = new Expense(ID, desc, value);
            }

            data.allItems[type].push(newItem);

            persistData()

            return newItem;
        },

        deleteItem: function(type, id) {
            var index;

            index = data.allItems[type].filter(idx => idx === id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

            persistData();

        },

        calculateBudget: function() {
            calculateTotal('inc');
            calculateTotal('exp');

            data.budget = data.totals.inc - data.totals.exp;

            if (data.totals.inc > 0) {
                data.percentages = Math.round(data.totals.exp / data.totals.inc * 100)
            } else {
                data.percentages = -1;
            }
            
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentages: data.percentages
            }
        },

        calculatePercentages: function() {
            data.allItems.exp.forEach(cur => cur.calcPercentage(data.totals.inc))
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(cur => cur.getPercentage());

            return allPerc;
        },

        readStorage,
        data,

        test: function() {
            console.log(data, data.budget);
        }
    }
})();


// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputBtn: '.add__btn',
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel:'.budget__expenses--value',
        percentagesLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        monthLabel: '.budget__title--month'
    }

    var formatNumber = function(num, type) {
        var numSplit, int, dec, type, parts = [];

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        dec = numSplit[1];

        while (int.length > 3) {
            a = int.substr(int.length - 3, 3); //input 23510, output 23,510
            int = int.substr(0, int.length - 3);
            parts.unshift(a);
        }
        
        parts.length > 0 ? int+= ',' + parts.join(',') : int;

        return num.length > 3 ? ((type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec) : num;

    }

    return {
        getDOMstr: function() {
            return DOMStrings;
        },

        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: +document.querySelector(DOMStrings.inputValue).value
            }
        },

        addListItem: function(obj, type) {
            var element, html;

            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = `
                <div class="item clearfix" id="inc-${obj.id}">
                    <div class="item__description">${obj.description}</div>
                    <div class="right clearfix">
                        <div class="item__value">${formatNumber(obj.value, 'inc')}</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = `
                <div class="item clearfix" id="exp-${obj.id}">
                    <div class="item__description">${obj.description}</div>
                    <div class="right clearfix">
                        <div class="item__value">${formatNumber(obj.value, 'exp')}</div>
                        <div class="item__percentage">21%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`
            }

            document.querySelector(element).insertAdjacentHTML('beforeend', html);
        },

        deleteListItem: function(ID) {
            document.getElementById(ID).remove();
        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.from(fields);

            fieldsArr.forEach(cur => cur.value = '');

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.totalInc) {
                document.querySelector(DOMStrings.percentagesLabel).textContent = obj.percentages + '%';
            } else {
                document.querySelector(DOMStrings.percentagesLabel).textContent = '-';
            }
        },

        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
            var fieldsArr = Array.from(fields);
            fieldsArr.forEach(function(cur, index) {
                if (percentages[index] > 0) {
                    cur.textContent = percentages[index] + '%';
                } else {
                    cur.textContent = '-';
                }
            })
        },

        displayMonth: function() {
            var month, year, months;

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = new Date().getMonth();
            year = new Date().getFullYear();
            document.querySelector(DOMStrings.monthLabel).textContent = months[month] + ' ' + year;
        },

        changedType: function() {
            var fields = document.querySelectorAll(DOMStrings.inputType + ',' + DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            var fieldsArr = Array.from(fields);
            fieldsArr.forEach( cur => cur.classList.toggle('red-focus'));

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        }
    }
        
})();


//APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstr();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    }
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        input = UICtrl.getInput();
        if (input.description && input.value) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();
            updateBudget();
            updatePercentages();
            budgetCtrl.test();
        }  
    }

    var ctrlDeleteItem = function(e) {
        var itemID, splitID, type, ID;

        itemID = e.target.parentNode.parentNode.parentNode.parentNode.id; //inc-0

        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = +splitID[1];
        
            budgetCtrl.deleteItem(type, ID);

            UICtrl.deleteListItem(itemID);

            updateBudget();
            updatePercentages();
            budgetCtrl.test();
        }
    }

    var updateBudget = function() {
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        UICtrl.displayBudget(budget);
    }

    var updatePercentages = function() {
        budgetCtrl.calculatePercentages();
        var percs = budgetCtrl.getPercentages();
        UICtrl.displayPercentages(percs);
    }

    var loadDataFromStorage = function() {
        budgetCtrl.readStorage();
        budgetCtrl.data.allItems.inc.forEach(curInc => UICtrl.addListItem(curInc, 'inc'));
        budgetCtrl.data.allItems.exp.forEach(curExp => UICtrl.addListItem(curExp, 'exp'));
        
    }

    return {
        init: function() {
            loadDataFromStorage();
            setupEventListeners();
            updateBudget();
            updatePercentages();
            UICtrl.displayMonth();
        }
    }
})(budgetController, UIController);


controller.init();