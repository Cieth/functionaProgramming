const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
const map1 = arr.map((x) => x*2)
console.log(map1)// [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
const filter = arr.filter(x => x%2 ===0)
console.log(filter)// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
const reduce = arr.reduce((a,b) => a+b)
console.log(reduce)// 21
