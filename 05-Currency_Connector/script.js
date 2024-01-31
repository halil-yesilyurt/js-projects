const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

// Fetch the current exchanges rates and update the DOM
function calculate() {
  const currencyOneVal = currencyOne.value;
  const currencyTwoVal = currencyTwo.value;

  fetch(`https://open.er-api.com/v6/latest/${currencyOneVal}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwoVal];
      rateEl.innerText = ` 1 ${currencyOneVal} = ${rate} ${currencyTwoVal}`;

      amountTwo.value = (amountOne.value * rate).toFixed(4);
    });
}

// Event listeners for any change
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swapBtn.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
