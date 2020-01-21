function appleNazi(array){
    result = [];
    for(i = 0; i < array.length; i++){
        if(array[i] != "apples"){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(appleNazi(["apples", "orange", "apples", "bananas"]));