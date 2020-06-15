import { person, sayHello } from './lib';

// console.log(person.name);
// console.log(person.age);

// console.log(sayHello('Sofija'));

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // fetch pravi HTTP zahtjeve i vraca podatke kao Promise
  const data = await response.json();

  return data;
}

// Posto nam getPosts vraca Promise (jer smo definisali tu funkciju kao async) radimo
getPosts().then(posts => console.log(posts)); // Ovdje dobijamo gresku 'regeneratorRuntime is not defined'
                                              // a da bismo je popravili koristimo babel-polyfill (i babel-preset-stage-0)
