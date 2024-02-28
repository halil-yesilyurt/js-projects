const postBox = document.querySelector('.post-box');
const loader = document.querySelector('.loader');
const filter = document.getElementById('filter');

let postLimit = 5;
let page = 1;

// Fetch the data from the fake api
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}&_page=${page}`);

  const data = await res.json();
  return data;
}

// Show loader animation and fetch more posts
function showLoading() {
  loader.classList.add('active');
  setTimeout(() => {
    loader.classList.remove('active');
    setTimeout(() => {
      console.log(page);
      page++;
      showPosts();
    }, 1000);
  }, 1000);
}

// Filter post by checking titles and feeds
function filterPost(e) {
  const term = e.target.value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  
  posts.forEach((post) => {
    const postTitle = post.querySelector('.post-title').innerText.toLowerCase();
    const postFeed = post.querySelector('.post-content').innerText.toLowerCase();
    if (postTitle.indexOf(term) > -1 || postFeed.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
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
    postBox.appendChild(postEl);
  });
}

showPosts();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPost);
