const cloneArray = require("./cloneArray");

test("copy two array:", () => {
    const array = [1, 2, 3, 4, 5];
    //expect(cloneArray(array)).toBe(array); //we can not check array, since new array have new memory address
    expect(cloneArray(array)).toEqual(array);
})