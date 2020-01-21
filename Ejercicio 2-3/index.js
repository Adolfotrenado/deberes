function arrayRandom(array){
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
}
document.write(arrayRandom(["hola", "mundo", "lo estoy", "petando"]));