var Array1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
// Sample Output: -4, -3, 1, 2, 3, 5, 6, 7, 8
function sort(numberArray) {

    var number = numberArray.length;
    for (var index = 0; index < number - 1; index++) {
        for (var index2 = 0; index2 < number - 1; index2++) {
            if (numberArray[index2] > numberArray[index2 + 1]) {
                var compareSwap = numberArray[index2];
                numberArray[index2] = numberArray[index2 + 1];
                numberArray[index2 + 1] = compareSwap;
            }
        }
    }
    return numberArray;
}

var SortedArr = sort(Array1);
console.log("Result: " + SortedArr)