/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let res = {};
   let i = 0;
   let anchor = 0;
   let len = 0;
   let templen = 0;

   for(i = 0; i < s.length; i++){
       if(res[s[i]] === undefined){
           res[s[i]] = i;
       }
       else{
           if(res[s[i]] >= anchor){
               templen = i - anchor;
               len = len > templen ? len : templen;
               anchor = res[s[i]] + 1;                
           }
           res[s[i]] = i;
       }
   }
   templen = i - anchor;
   len = len > templen ? len : templen;
   return len;
};