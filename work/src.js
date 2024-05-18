function showTemp(response) {
  let temperature = document.querySelector(".current-temperature-value");
  temperature.innerHTML = response.data.temperature.current;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input").value;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
  let api = "057314561f8344abb8d5d80t6761o6ae";
  let city = searchInputElement.value;
  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api}&units=metric`;
  axios.get(apiKey).then(showTemp);
}

let forms = document.querySelector("#Search-form");
forms.addEventListener("submit", search);

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
