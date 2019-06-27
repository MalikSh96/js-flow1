const fetch = require("node-fetch");

//serial, run code dependent on each other
async function serial(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      //fetching persons, using i to pick out persons
      await fetch("https://swapi.co/api/people/" + i)
      //has to return person 1 before person 2
        .then(res => { return res.json() }));
  }
  //mapping to make it look pretty
  console.log(swappiPeople.map(p => p.name).join(", "));
}

//parallel, run different code independent of each other
async function parallel(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe no await
      fetch("https://swapi.co/api/people/" + i)
      //returns whichever person is acquired first
        .then(res => { return res.json() }));
  }
  const all = await Promise.all(swappiPeople);
  console.log(all.map(p => p.name).join(", "));

}
//Time each of the two strategies has to do the fetch
//serial(15);
parallel(15);