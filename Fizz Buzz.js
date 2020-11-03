/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let array = [];

    for(let i = 0; i <= n-1; i++){
        const j = i + 1;
        array[i]=j + '';

        if(j%3 === 0){
            array[i]= "Fizz";
        }
        if(j%5 === 0){
            array[i]= "Buzz";
        }
        if(j%3 === 0 && j%5 === 0){
            array[i]= "FizzBuzz";
        }
    }

    return array;
};