/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    input.sort(function(a, b){return a-b});
    if(input.length % 2 != 0){
        return input[Math.ceil(input.length/2)-1]
    }else{
        var avg = input[Math.ceil(input.length)-1] + input[Math.floor(input.length)-1];
        return avg;
    }
};