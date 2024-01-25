
//Takes 50ms runtime
var isValid = function(s) {
    
    if(s.length %2 !== 0) return false;
    let stack = [];
    for(let i=0; i<s.length;i++){
        if(s[i] === '('){
            stack.push(')')
        } else if (s[i] === '['){
            stack.push(']')
        } else if (s[i] === '{'){
            stack.push('}')
        } 
        else if (stack.length === 0 || stack.pop() !== s[i]){
            return false;
        }
    }

    return stack.length === 0 ?  true :  false
    
    
};


// More efficient code, only takes 31ms runtime
var isValid = function(s) {
    const stack = [];

const bracketMap = {
  ')': '(',
  '}': '{',
  ']': '[',
};

for (let i = 0; i < s.length; i++) {
  const currentBracket = s[i];

  if (bracketMap.hasOwnProperty(currentBracket)) {
    const topElement = stack.length === 0 ? '#' : stack.pop();

    if (topElement !== bracketMap[currentBracket]) {
      return false;
    }
  } else {
    stack.push(currentBracket);
  }
}
return stack.length === 0;
};