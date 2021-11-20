const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=db6a6c43b051b7fcbc5f64757d4a8b5f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById("description").textContent =
      jsObject.weather[0].main;
    document.getElementById("temp").textContent = jsObject.main.temp;
    document.getElementById("humidity").textContent = jsObject.main.humidity;
    document.getElementById("speed").textContent = jsObject.wind.speed;

    let t = parseFloat(document.getElementById("temp").innerHTML);
    let s = parseFloat(document.getElementById("speed").innerHTML);

    if (t <= 50 && s > 3) {
      let chill =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(s, 0.16) +
        0.4275 * t * Math.pow(s, 0.16);

      chill = document.getElementById("windchill").innerHTML = chill.toFixed(2);
    } else {
      chill = "Not Applicable";
    }
  });

const apiforecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=db6a6c43b051b7fcbc5f64757d4a8b5f";
fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    const dayofWeek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    const form = jsObject.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );
    let day = 0;
    let i = 0;

    for (i = 0; i < form.length; i++) {
      let d = new Date(form[i].dt_txt);
      // console.log(d);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent =
        form[day].main.temp;

      const imagesrc =
        "https://openweathermap.org/img/w/" +
        form[day].weather[0].icon +
        ".png";

      document.getElementById(`imagesrc${day + 1}`).textContent = imagesrc;
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc);
      document
        .getElementById(`icon${day + 1}`)
        .setAttribute("alt", form[0].weather[0].description);
      day++;
    }
  });
