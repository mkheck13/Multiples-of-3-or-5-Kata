// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.





// need to make an empty variable to save our data in
// should be able to do a for loop to iterate thru the numbers
// an if statement that checks if the numbers are multiples of 3 or 5 and adds one to the sum
// it does the up count only once per number
// return the sum of the numbers
function solution(num){
    let sum = 0;
    for(let i = 0; i < num; i++){
        if(i % 3 == 0 || i % 5 == 0)
            sum += i;
    }
    return sum;
}






// this attempt didn't work properly
// I will have to get help figuring out why it didn't work
function solution(num){
    let sum3 = 0;
    let sum5 = 0;
    for(let i = 0; i < num; i++){
        if(i % 3 == 0) sum3 += i;
        if(i % 5 == 0) sum5 += i;
    }
    return sum3 + sum5;
}