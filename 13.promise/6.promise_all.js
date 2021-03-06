/* 
    Promise ๋ณ๋ ฌ์ฒ๋ฆฌ
*/
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("๐");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("์ค๋ ์ง๊ฐ ์๋ค!"));
}

// ๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ํจ๊ป ๊ฐ์ง๊ณ  ์ค๊ธฐ
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log);

// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log("all", fruits)
);

// Promise.race ์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋ ๊ฒ์ด ์คํ
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log("race", fruit)
);

// ์๋ฌ ํฌํจ
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);
