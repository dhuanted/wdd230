const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=db6a6c43b051b7fcbc5f64757d4a8b5f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent =
      jsObject.main.temp.toFixed(2) / 10;
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);
  });
