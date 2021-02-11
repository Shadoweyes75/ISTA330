/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    var stringArray = input.split("");
    var ret = [];
    while(shuffleIndices.length > 0){
        var shuffleMin = Math.min(shuffleIndices);
        var indexMin = shuffleIndices.indexOf(shuffleMin);
        delete shuffleMin[indexMin];
        ret.push(stringArray[indexMin]);
    }
    return ret;
};