function compose(...funcs){        
    return (...args) => {
        return funcs.reverse().reduce((acc, fn) => {        
            return [fn(...acc)];
        }, args)[0];
    }
}

const multiplyNumbers = (a, b) => a * b;
const doubleNumbers = (a) => 2 * a;

compose(doubleNumbers, multiplyNumbers)(3, 7);

const divideBy2 = (a) => a / 2;
const square = (a) => a * a;
const max = (...args) => Math.max.apply(null, args);

compose(divideBy2, square, max)(2, 1, 4, 3);
compose(divideBy2, square, max)(3, 0, 6, 5);