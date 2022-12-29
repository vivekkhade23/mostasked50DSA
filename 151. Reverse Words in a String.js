/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s=s.trim()
    s=s.split(" ");
    s=s.filter(el=> el!=="");
    console.log(s)
    s=s.reverse().join(" ")
    return s;
};
