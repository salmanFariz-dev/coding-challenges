
let twoSum1 = function (nums, target) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return newArr = [i, j]
        }
    }
    return newArr
};

twoSum1([2,4,6,7],8)

//more optimized answer
let twoSum2 = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }

    return [];
};

twoSum2([2,4,6,7],8)