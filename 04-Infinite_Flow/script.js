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

// Show data in the DOM
async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
        <div class="number">${post.id}</div>
            <article class="post-feed">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">${post.body}</p>
        </article>
    `;
    postBox.appendChild(postEl)
  });
}

showPosts();
