"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((element, index) => {
        result.push(element);
        result.push(list2[index]);
    });
    return result;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']));
