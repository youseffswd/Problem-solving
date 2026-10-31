export function productExceptSelf(nums: number[]): number[] {
  const productNums: number[] = Array.from({length:nums.length},_ => 1);
  
  let left: number = 1;
  let right: number = 1;
  for(let i = 1; i < nums.length; i++){
    left *= nums[i - 1];
    productNums[i] *= left;
    right *= nums[nums.length - i];
    productNums[nums.length - i - 1] *= right
  }
  return productNums;
}

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // Output: [0,0,9,0,0]