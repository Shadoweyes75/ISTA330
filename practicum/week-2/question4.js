/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    const Alist = A.split("");
    let sameLetters = 0;
    for(var i = 0; i < Alist.length; i++){
        if((B.indexOf(Alist[i])) != -1){
            sameLetters ++;
        }
    }
    return sameLetters;
};