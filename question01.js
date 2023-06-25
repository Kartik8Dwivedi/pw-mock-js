let moveZeroes = function(nums) {
    let pointer = 0, count = 0;
    let n = nums.length;
    for(let i=0; i<n; i++){
        if(nums[i] != 0){
            nums[pointer] = nums[i];
            pointer++;
        }else{
            count++;
        }
    }
    for(let i=n-count; i<n; i++){
        nums[i] = 0;
    }
};

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)