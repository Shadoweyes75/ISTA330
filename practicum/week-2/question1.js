/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   var nums = []
   for(var x = 0; x < input.length; x++){
      nums.push(0);
   }
   let i = 0;
   for(var x = 0; x < input.length; x++){
      i += input[x];
      nums[x] = i;
   }
   return nums;
};