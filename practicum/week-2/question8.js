/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var bigEven = [];
    var curBigger = 0;
    for(var i = 0; i < input.length; i++){
        curBigger = 0;
        const current = input[i];
        for(var x = 0; x < input.length; x++){
            if(input[x] > input[i] && (input[x]%2 ==0)){
                curBigger++;
            }
        }
        bigEven.push(curBigger);
    }
    return bigEven.reverse();
};