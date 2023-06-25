let firstUniqChar = function(s) {
    const myMap = new Map();
    for(let i=0; i<s.length; i++){
        if(myMap.has(s.charAt(i))){
            myMap.set(s[i],myMap.get(s[i])+1)
        }else{
            myMap.set(s[i],1)
        }
    }
    for(let i=0; i<s.length; i++){
        if(myMap.get(s[i]) == 1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"))