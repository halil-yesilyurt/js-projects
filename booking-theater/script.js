const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = movieSelect.value;

// Toggle the class from selected seat if it was N/A
function ifTargetSeat(seat) {
  if (seat.target.classList.contains('seat') && !seat.target.classList.contains('occupied')) {
    seat.target.classList.toggle('selected');
    }
}

// Update the total price
function totalPrice(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
    ticketPrice = e.target.value;
    totalPrice();
})


// Seat selection event
container.addEventListener('click', (e) => {
  ifTargetSeat(e);
  totalPrice();
});
