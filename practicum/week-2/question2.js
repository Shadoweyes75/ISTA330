
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        var balanceCookies = 0;
        const mostCookiesEaten = Math.max(cookies);
        for(var i = 0; i < cookies.length; i++){
                const curCookiesEaten = cookies[i];
                balanceCookies += mostCookiesEaten - curCookiesEaten;
        }
        console.log(balanceCookies);
        if(balanceCookies === extraCookies){
                return true;
        }else if(balanceCookies < extraCookies){
                const leftOvers = extraCookies - balanceCookies;
                return (cookies.length % leftOvers) === 0;
        }else{
                return [balanceCookies, extraCookies];
                return false;
        }
    
 };
