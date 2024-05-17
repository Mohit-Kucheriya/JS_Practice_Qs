// Q1.
function add(arr) {
    let sum = 0;
    arr.forEach(function (el) {
        sum = sum + el;
    });
    return sum;
}
console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(add([10, 20, 30, 40, 50, 60]));

// Q2.
function onlyNumber(arr) {
    let sum = 0;
    arr.forEach(element => {
        if (typeof element == "number") {
            sum = sum + element;
        }
    });
    return sum;
}
console.log(onlyNumber(["mohit", 123, "harry", 325]));

// Q3. 1- first check total non male and count. 2- write a code to remove one non-male from that obj. 
let objPer = [
    { name: "Mohit Kucheriya", gender: "male" },
    { name: "Hermoine Granger", gender: "female" },
    { name: "Draco", gender: "other" },
    { name: "Harry Potter", gender: "male" },
    { name: "Voldermot", gender: "other" },
];
let count = 0;

objPer.forEach(function (element) {
    if (element.gender !== "male") {
        count++;
    }
});

for (let i = 0; i <= count; i++) { //this loop will remove all the non-male 
    for (let j = 0; j < objPer.length; j++) { //this will remove only one non-male 
        if (objPer[j].gender !== "male") {
            objPer.splice(j, 1);
        }

    }

}
console.log(objPer);
