export function threeSum(nums: number[]): number[][] {
    const hash: Record<string, boolean> = {};
    const result: number[][] = [];
    nums = nums.sort((a, b) => a - b);
    let i = 0;

    while (i < nums.length - 2) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                const triplet = [nums[i], nums[l], nums[r]];
                const key = triplet.join(",");
                if (!hash[key]) {
                    hash[key] = true;
                    result.push(triplet);
                }
                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
        i++;
    }

    return result;
}

threeSum([-4, -1, -1, 0, 1, 2]);
// threeSum([1, 2, 3, 4, 5, 6, -10, 0, -3, -2]);
