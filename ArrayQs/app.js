// Q1. 1st way Using sort
function cloneArr1(arr) {
    let cloning = [...arr];
    console.log(cloning);
}
cloneArr1([1, 2, 3, 4, 5]);

// 2nd way Using arr.push()
function cloneArr2(arr) {
    let clone = [];
    arr.forEach(function (e) {
        clone.push(e);
    });
    return clone;
}
let newCloneArr2 = cloneArr2([1, 3, 3, 4]);
console.log(newCloneArr2);

// 3rd way Using map()
function cloneArr3(arr) {
    return arr.map(function (e) {
        return e;
    });
}
let newCloneArr3 = cloneArr3([10, 11, 12, 13, 14, 15]);
console.log(newCloneArr3);

// Q2.
function getFirst(arr, n = 1) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(getFirst([10, 2, 3, 12], 2));

// Q3.
function getLast(arr, n = 1) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[arr.length - 1 - i]);
    }
    return newArr;
}
console.log(getLast([10, 2, 3, 12], 2));

// Using Slice
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNum = num.slice(num.length - 3);
console.log(newNum);

// Q4.
function mostFreq(arr) {
    let freq = {};
    arr.forEach(function (el) {
        if (freq.hasOwnProperty(el)) {
            freq[el]++;
        } else {
            freq[el] = 1;
        }
    });
    console.log(freq);

    var ans = Object.keys(freq).reduce(function (acc, result) {
        return freq[acc] > freq[result] ? acc : result;
    });
    console.log(ans);
}
mostFreq([1, 2, 1, 2, 1, 2, 1, 2, 2]);

// Q5.
function shuffle(arr) {
    // 1st calculate the total length of array.
    var totalShuffle = arr.length;
    while (totalShuffle > 0) {
        totalShuffle--;
        var indexToBeExchange = Math.floor(Math.random() * totalShuffle);
        var temp = arr[totalShuffle];
        arr[totalShuffle] = arr[indexToBeExchange];
        arr[indexToBeExchange] = temp;
    }

    return arr;
}
console.log(shuffle([1, 2, 3, 4, 5]));

// Q6.
function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}
console.log(union([1, 2, 3, 3], [2, 4, 2, 1, 6]));
