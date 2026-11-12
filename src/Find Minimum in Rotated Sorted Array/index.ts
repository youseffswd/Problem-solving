








export function findMin(nums: number[]): number {
  
  function searchMin(l:number,r:number): number{
    let mid = Math.floor((r + l) / 2);
    if(nums[l] > nums[mid]){
      return searchMin(l,mid)
    }else if(nums[mid] > nums[r]){
      return searchMin(mid+1,r)
    }else {
      return nums[l]
    }
  }
  
  return searchMin(0,nums.length - 1)
}
// console.log(findMin([3,4,5,6,1,2]))
let bigList = Array.from({length:10000}).map((_,i) => (i + 99) % 10000)
console.log(findMin(bigList))




















