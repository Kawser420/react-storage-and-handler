const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const divided = (first, second) => {
    return first / second;
}

// const numbers = [10, 23, 234, 33, 44];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)

// const items = [
//     {id: 1, name: 'banana', price: 10},
//     {id: 2, name: 'mango', price: 110},
//     {id: 3, name: 'watermelon', price: 220},
//     {id: 4, name: 'apple', price: 100},
// ]

// const sumItemsReducer = (previous, current) => previous + current;
// const total = items.reduce(sumItemsReducer, 0);

const getTotalPrice = product => {
    const reducer = (previous, current) => previous + current;
    const total = product.reduce(reducer, 0);
    return total;
}

export {
    add,
    multiply,
    divided,
    getTotalPrice as getTotal
    };