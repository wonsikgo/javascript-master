/* 
    λ°°μ΄ μ°Έμ‘°
*/

const fruits = ["π", "π", "π", "π"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ
fruits[4] = "π";

console.log(fruits);

delete fruits[1];

console.log(fruits);
