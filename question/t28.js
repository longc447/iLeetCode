/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if(needle=="")return 0;
    for (let index = 0; index < haystack.length; index++) {
        if(haystack.substring(index,index+needle.length)==needle){
            return index
        }
    }
    return -1;
};
var strStr2 = function (haystack, needle) {
    return haystack.indexOf(needle);
};
var haystack = "aaaaa", needle = "bba"
console.log(strStr2(haystack, needle))