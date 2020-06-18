/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
 if (n == 0){
    return 1;
 }
 else{
    let factorial = n
    for(let i=1; i < n; i++){
        factorial = factorial*i;
    }
    return factorial;
 }
}
