/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1=s.split(" ");
    s1=s1.join("")
    let s2=s1.split(",");
  s2=s2.join("");
  let s3=s2.split(":");
  s3= s3.join("");
  //   console.log(s3)
  
  let str=s3.split("").reverse().join("");
  if(str.toLowerCase()===s3.toLowerCase()){
      return true;
  }else {
      return false;
  }
  };