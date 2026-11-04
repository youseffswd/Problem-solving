




export function search(nums: number[], target: number): number {
  const binarySearch = (start:number,end:number) => {
    if(start > end) return -1;
    const mid = parseInt(((start + end) / 2).toString());
    const midNum = nums[mid]
    if(midNum === target){
      return mid
    }else if(midNum > target){
      return binarySearch(start,mid - 1);
    }else{
      return binarySearch(mid + 1,end);
    }
  }

  return binarySearch(0,nums.length - 1)
}


console.log(search([-1,0,2,4,6,8],10)) 
