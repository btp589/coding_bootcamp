// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var num = process.argv;
// can also use process.argv.slice(2) will grab from index 2 to the end of the array.
var numArr = [];

for (var i = 2; i < num.length; i++) {
    numArr.push(parseFloat(num[i]));
}

numArr.sort(sortNumber);
console.log("Sorted: " + numArr.join(","));


function sortNumber(a,b) {
    return a - b;
}


// Beau's way:
var nums = process.argv.slice(2);
var ascending = function(a, b) {
    return parseInt(a) - parseInt(b);
}

console.log(nums.sort(ascending));