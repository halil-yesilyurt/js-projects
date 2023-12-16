const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random person and money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: generateMoney(),
  };
  addData(newUser);
}

// Add new data to object
function addData(obj) {
  data.push(obj);
  
  // Update the DOM after every add
  updateDOM();
}

// Generate number as currency
function generateMoney() {
  return (
    '$' +
    Math.floor(Math.random() * 1500000)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  );
}

// Update DOM with new users
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
    main.appendChild(element);
  });
}

// Add new users at every click
addUserBtn.addEventListener('click', getRandomUser);