/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num=[];
    for(let i=0;i<s.length;i++){
        if(Number.isInteger(+s[i])||s[i]=="-"){
            num.push(s[i])
        }
    }
    console.log(num)
    return num.join("")
};