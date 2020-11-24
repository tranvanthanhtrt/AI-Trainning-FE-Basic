function function1(a, b) {
    return a === b ? 3 * (a + b) : a + b
}

function function2(a) {
    return a > 19 ? 3 * (a - 19) : 19 - a
}

function function3(a) {
    let numbers = a.split('');
    let result = []
    let numOr0 = n => isNaN(n) ? 0 : n
    let sum = numbers.reduce((a, b) =>
        numOr0(parseInt(a)) + numOr0(parseInt(b)));
    for (let i = 0; i < 10; i++) {
        if ((sum + i) % 3 === 0) {
            result.push(a.replace('*', i));
        }
    }
    return (result);
}

function function4(a) {
    let result = []
    for (let i = 0; i < 10; i++) {
        let num = parseInt(a.replace('*', i))
        if (num % 6 === 0) {
            result.push(num);
        }
    }
    return (result);
}


console.log(function1(4, 3))
console.log(function2(27))
console.log(function3('1234567890*'));
console.log(function4('1234567890*'));
