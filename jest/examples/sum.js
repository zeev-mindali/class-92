const sum = (num1, num2) => {
    //return the sum of num1 + num2
    return num1 + num2;
}

const minus = (num1, num2) => {
    return num1 - num2;
}

const multi = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

// const tzvi = () => {
//     console.log("hello");
// }
// const helper = () => {
//     console.log("hello world from helper");
// }

//module.exports = sum;
//module.exports = tzvi;
//module.exports = minus;
// module.exports = multi;
// module.exports = divide;

module.exports = { sum, minus, multi, divide }