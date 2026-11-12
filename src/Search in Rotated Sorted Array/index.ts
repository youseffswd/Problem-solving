export function search(nums: number[], target: number): number {
    function BN(l: number, r: number) {
        const mid = Math.floor((l + r) / 2);
        if(l > r) {return -1}
        else if (nums[mid] === target) {return mid;}
        else if (nums[mid] < target) {
            return BN(mid + 1, r);
        } else {
            return BN(l, mid - 1);
        }
    }

    function binarySearch(l: number, r: number): number {
        const mid = Math.floor((l + r) / 2);
        if (nums[l] < nums[r] || l === r) {
            // sorted
            if (nums[r] < target || nums[l] > target) {
                return -1;
            } else {
                return BN(l, r);
            }
        } else {
            // not sorted
            return Math.max(binarySearch(l, mid), binarySearch(mid+1, r));
        }
    }
    return binarySearch(0, nums.length - 1);
}
console.log(search([3,5,6,0,1,2], 4));
