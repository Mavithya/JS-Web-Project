/* ==========sidebar========= */
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});

/* ======Carousal Wallpapers====== */

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  
}
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

const button = document.querySelector('.button');

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;

  updateCarousel();
});


setInterval(autoSlide, 100000); // Change image every 100 seconds

updateCarousel(); // Initial update


/*Button*/
const Button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});

/* -----Date Update-----*/
function formatDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function setDate() {
  const dateInput = document.getElementById('dateInput');
  dateInput.value = formatDate();
}

window.onload = setDate;

/* -----Swap Stations-----*/
function swapStations() {
  var startStationInput = document.getElementById("start-station");
  var endStationInput = document.getElementById("end-station");

  var temp = startStationInput.value;
  startStationInput.value = endStationInput.value;
  endStationInput.value = temp;
}
/* -----return tick----*/
function toggleReturnDate() {
  var returnDateLabel = document.getElementById("return-date-label");
  var returnDateInput = document.getElementById("return-date");
  
  if (returnDateInput.style.display === "none") {
      returnDateLabel.style.display = "block";
      returnDateInput.style.display = "block";
  } else {
      returnDateLabel.style.display = "none";
      returnDateInput.style.display = "none";
  }
}
