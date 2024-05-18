function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input").value;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement;
}

let forms = document.querySelector("#Search-form");
forms.addEventListener("submit", search);

//task2
let time = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[new Date().getDay()];
let hour = new Date().getHours();
let minute = new Date().getMinutes();
time.innerHTML = `${day} ${hour}:${minute}`;

