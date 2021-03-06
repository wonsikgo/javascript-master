/* 
    Promise ν¨μ
*/

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π₯`);
}

function getChicken() {
  // return Promise.resolve(`π₯¦ => π`);
  return Promise.reject(new Error("μΉν¨μ κ°μ§κ³  μ¬ μ μμ!"));
}

// fetchEgg('π')

// getChicken()
//   .then((chicken) => {
//     return fetchEgg(chicken);
//   })
//   .then((egg) => fryEgg(egg))
//   .then((friedEgg) => console.log(friedEgg));

getChicken()
  .catch(() => "π")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log());
