
//takes 140ms runtime
var isPalindrome = function(x) {
   
    //negative numbers are not palindromes
    if(x < 0) return false

    let splitString = String(x).split('')
    let reversed = splitString.reverse().join('') 

    return reversed === String(x)
}
// console.log(isPalindrome(121))


//more efficient, only takes 89ms runtime!!
var isPalindrome = function(x) {

    //negative numbers are not palindromes
    if(x < 0) return false

    let sum=0;
    let num=x;
    
    while(num>0)
    {
        const digit=num%10;
        sum=sum*10+digit;
        num=~~(num/10);
    }
    return sum==x;
};
// console.log(isPalindrome(101))


