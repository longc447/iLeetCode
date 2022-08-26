/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let sum=nums.length;
    for (let index = 0; index < sum; index++) {
        if (nums[index] == val) {
            nums.splice(index, 1);
            index--;
            sum=nums.length;
        }
    }
    return nums.length;
};
var f2=(nums,val)=>{
    let index = nums.indexOf(val)
    while (index > -1) {
        nums.splice(index, 1)
        index = nums.indexOf(val)
    }
    return nums.length;
}
var f3=(nums,val)=>{
    let count=0;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index]!=val)count++;
    }
    return count;
}
const result = f3([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.log(result)