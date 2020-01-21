function sumaArrays(array1, array2){
    let result= [];
        result.push(...array1);
        result.push(...array2);
        return result;
}

let array1 = [1,2,3,4,5,6,7,8];
let array2 = ["hola","adios","saludo", "despedida"]

console.log(sumaArrays(array1, array2))