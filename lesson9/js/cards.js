const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // check for json object
    // console.table(jsonObject);

    const towns = jsonObject["towns"];

    // loop through the array
    for (let i = 0; i < towns.length; i++) {
      // declare each variable
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let motto = document.createElement("h3");
      let year = document.createElement("p");
      let pop = document.createElement("p");
      let rain = document.createElement("p");
      let image = document.createElement("img");
      let textd = document.createElement("div");

      // What each card will have, contatenation of the strings, declaring classes to make CSS easier
      if (
        towns[i].name == "Preston" ||
        towns[i].name == "Fish Haven" ||
        towns[i].name == "Soda Springs"
      ) {
        h2.textContent = towns[i].name;
        motto.textContent = "Town Motto:" + " " + towns[i].motto;
        year.textContent = "Year Established:" + " " + towns[i].yearFounded;
        pop.textContent =
          "Current Population:" + " " + towns[i].currentPopulation;
        rain.textContent = "Annual Rainfall:" + " " + towns[i].averageRainfall;
        image.setAttribute("src", `images/${towns[i].photo}`);
        image.setAttribute("alt", towns[i].name + " Photo");
        image.setAttribute("class", "townimg");
        card.setAttribute("class", "home_sect");
        textd.setAttribute("class", "home_town_text");

        // build the display by updating as I loop through. Use an "if" statement to select just the towns I want.
        // if (towns[i].name == 'Preston'|| towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
        card.appendChild(textd);
        textd.appendChild(h2);
        textd.appendChild(motto);
        textd.appendChild(year);
        textd.appendChild(pop);
        textd.appendChild(rain);
        card.appendChild(image);
      } else {
        card.setAttribute("class", "home_hide");
      }

      document.querySelector("div.town_div").appendChild(card);
    }
  });

/*** const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    const cards = document.querySelector(".cards");
    // select output location
    towns.forEach((town) => {
      let divText = document.createElement("div");
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h5 = document.createElement("h5");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let townimg = document.createElement("img");

      if (
        town.name == "Preston" ||
        town.name == "Fish Haven" ||
        town.name == "Soda Springs"
      ) {
        // template literals
        h2.textContent = `${town.name}`;
        h2.style.margin = "2px 0";
        h5.textContent = `${town.motto}`;
        h5.style.margin = "2px 0";
        p2.textContent = `Year Founded: ${town.yearFounded}`;
        p3.textContent = `Population: ${town.population}`;
        p4.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
        pMargin = "1rem 0 0 0"; // variable to hold margin of paragraphs
        p2.style.margin = "2rem 0 0 0";
        p3.style.margin = pMargin;
        p4.style.margin = pMargin;
        divText.setAttribute("class", "content");

        townimg.setAttribute("src", `images/${town.photo}`);
        townimg.setAttribute("alt", `${town.name} photo`);


        divText.append(h2);
        divText.append(h5);
        divText.append(p2);
        divText.append(p3);
        divText.append(p4);
        card.append(divText);
        card.append(townimg);
        cards.append(card);
      }

      function addingOdds(altVariable) {
        divText.setAttribute("class", "data");
        if (altVariable % 2 == 0) {
          townimg.setAttribute("class", "derecha");
          divText.setAttribute("class", "data2");
        }
      }
    });
  });
***/
