function checkDivisible(num1,num2){
    let result = false;
    if(num1 % num2 === 0){
        result = true;
    }
    return result;
}
document.write(checkDivisible(9,3))
document.write(checkDivisible(6,8))