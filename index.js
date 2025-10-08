const getmax=(...nums)=>{
let max = nums[0]
for(const num of nums) max = max>num?max:num;
return max;
}

console.log(getmax(20,30,4,55,2,4))

