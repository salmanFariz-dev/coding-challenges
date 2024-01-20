
//takes 125ms

const validRomans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const romanNumerals = {
  'I': { value: 1, subChances : ['V','X'] },
  'V': { value: 5 },
  'X': { value: 10, subChances : ['L','C'] },
  'L': { value: 50},
  'C': { value: 100, subChances : ['D','M'] },
  'D': { value: 500 },
  'M': { value: 1000 }
};

var romanToInt = function(s) {
    for(let i=0; i<s.length; i++){
        if(!validRomans.includes(s[i])) return "not a valid roman"
    }

    let value = 0;
    for(let i=0; i<s.length; i++){
        if(romanNumerals[s[i]].hasOwnProperty("subChances")){
            if(romanNumerals[s[i]].subChances.includes(s[i+1]) ){
                value -= romanNumerals[s[i]].value
                continue
            } 
        }
        value += romanNumerals[s[i]].value
    }
    
    return value
};


//more efficient program
//only takes 67ms

var romanToInt = function(s) {
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    } 
    let result = 0;
    for(let i=0;i<s.length;i++){
        let crtSymVal = romanVal[s[i]];
        let nxtSymVal = romanVal[s[i+1]];
        if (nxtSymVal > crtSymVal){
            result += -crtSymVal;
        }else{
            result += crtSymVal;
        }
    }
        return result;
  };