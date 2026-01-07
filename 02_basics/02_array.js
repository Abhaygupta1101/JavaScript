const marvelHeros  =["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"]


marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

marvelHeros.concat(dcHeros)
console.log(marvelHeros)

console.log(Array.isArray("Abhay"))
console.log(Array.from("Abhay"))//  convert into array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
