




export function maxArea(heights: number[]): number {
  let l = 0
  let r = heights.length - 1;
  let maxAreaNum = 0;
  while (l < r){
    maxAreaNum = Math.max(maxAreaNum,
      (r - l) * Math.min(heights[l],heights[r])
    )
    if(heights[r] > heights[l]){
      l++
    }else{
      r--
    }
  }
  return maxAreaNum
}

