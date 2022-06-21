const weatherShow = async () => {
  const searchLocation = document.getElementById("search-location");
  document.getElementById('error').style.display = 'none';
  const searchText = searchLocation.value;
  searchLocation.value = "";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=b5dababa5cada0d7c6f7c2050dd9e8a5&units=metric`;

  try{
      const res = await fetch(url)
      const data = await res.json();
      weatherDetails(data)
      
        //   fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => weatherDetails(data));
  }
  catch(err) {  displayError(); } 
};

const displayError = () => {
    document.getElementById('error').style.display = 'block';
}

const weatherDetails = (data) => {
  const details = document.getElementById("weather-details");
  details.textContent = ''
  details.innerHTML = `
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <h1>${data.name}</h1>
    <h3><span>${data.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].main}</h1>
    `;
};
