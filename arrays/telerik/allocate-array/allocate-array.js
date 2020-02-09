function allocate(N) {
    const arr = [];
    for (let i = 0; i < +N[0]; i++) {
        arr.push(i * 5);
    }
    return arr.join('\n');
}

console.log(allocate(['5']));