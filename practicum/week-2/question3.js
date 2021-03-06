/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    var orderedPairs = 0;
    for(var i = 0; i < input.length-1; i++){
        for(var x = i+1; x < input.length; x++){
            if(input[i] < input[x]){
                orderedPairs++;
            }
        }
    }
    return orderedPairs;
};