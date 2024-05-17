console.log("String Question");
// Q1. using split(), reverse(), join()
var str = "The path behind us is a testament to our strength";
var newStr = str.split(" ").map(function (word) {
    return word.split("").reverse().join("");
});
console.log(newStr.join(" "));

// Q2.
function checkArray(element) {
    return Array.isArray(element);
}
console.log(checkArray(1));
console.log(checkArray([1, 2, 3]));

// Q3.
var arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.length = 0;
console.log(arr);

// Q4. two ways yo check if number is integer or not.
// Number.isInteger() / (n%1 === 0)
function isInteger(n) {
    if (n % 1 === 0) {
        console.log(`${n} is the Integer`);
    } else {
        console.log(`${n} is the not Integer`);
    }
}
isInteger(10);
isInteger(23.6);

// Q5. Using concat
function duplicate(a) {
    return a.concat(a);
}
console.log(duplicate([1, 2, 3, 4, 5]));

// Q6.
function reverse(num) {
    let rev = 0;
    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    console.log(rev);
}
reverse(12345);

//Q7. A palindrome is a word, or any other sequence of characters that reads the same forward and backward
function checkPalindrome(str) {
    let checkP = str.split("").reverse().join("");
    return checkP === str; //this will return either true or false
}

console.log(checkPalindrome("loop"));
console.log(checkPalindrome("madam"));

// Q8.
function sortAlphabetical(str) {
    return str.split("").sort().join("");
}
console.log(sortAlphabetical("apple"));
console.log(sortAlphabetical("mohit"));

// Q9.
function firstLetterCapital(str) {
    let capitalWord = str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return capitalWord.join(" ");
}

console.log(
    firstLetterCapital("Each step forward is a celebration of our progress.")
);

// Q10.
function countOcc(str) {
    var occObj = {};
    str.split("").forEach(element => {
        if (occObj.hasOwnProperty(element) === false) {
            occObj[element] = 1;
        } else {
            occObj[element]++;
        }
    });
    return occObj;
}
console.log(countOcc("apple"));
console.log(countOcc("aeroplane"));

// Q11.
function typeTeller(el) {
    return typeof el;
}
console.log(typeTeller([]));
console.log(typeTeller("Mohit Kucheriya"));
console.log(typeTeller(12));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () { }));