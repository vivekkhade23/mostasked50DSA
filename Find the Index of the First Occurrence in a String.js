/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    console.log(needle.length)
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]===needle[0]){
        let c=0;
        let x=i;
        let count=0;
        while(c<needle.length){
                if(haystack[x]===needle[c]){
count++;
                }
                c++;
                x++;
            }
            if(count===needle.length){
                return i;
            }
            else{
                i=i+count;
            }
        }
    }
    return -1;
};