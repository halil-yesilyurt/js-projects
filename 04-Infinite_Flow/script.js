const postBox = document.querySelector('.post-box');
const loader = document.querySelector('.loader');
const filter = document.getElementById('filter');

let postLimit = 3;
let page = 1;

// Fetch the data from the fake api
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}&_page=${page}`);

  const data = await res.json();
  return data;
}

