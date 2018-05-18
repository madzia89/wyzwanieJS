//Create a function that takes an array of positive and negative numbers.
// Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function countPosSumNeg(nums) {
    var arr = []
    var negative = 0
    var positive = 0
    //poniżej sprawdzane jest czy array nie jest nullem
    if(nums && Array.isArray(nums) && nums != '')
        for(var i = 0; i < nums.length; i++){
            if (nums[i] < 0){
                negative += nums[i]
            }
            else if (nums[i] > 0){
                positive ++
            }
        }
    if(negative < 0) arr.push(positive)
    if(positive > 0) arr.push(negative)
    return arr
}