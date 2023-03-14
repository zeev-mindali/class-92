// const countries = [
//   "Israel",
//   "Jordan",
//   "Egypt",
//   "China",
//   "USA",
//   "Mexico",
//   "France",
//   "Finland",
//   "Iran",
//   "Iraq",
//   "Italy",
//   "Japan",
// ];

const allCountriesURL = "https://restcountries.com/v3.1/all";
let allCountries = [];
let total = 0;
let myContinents = {};

//document ready
$(async () => {
  allCountries = await $.get(allCountriesURL);
  //console.log(allCountries.length);
  $("#myRange").attr("max", allCountries.length);
  createCountries(1);
});

// const displaySliderValue = (myValue) => {
//   $("#toDisplay").html(myValue);
// };

$(() => {
  $("#myRange").on("change", function () {
    //console.log(this.value);
    $("#toDisplay").html(this.value);
    createCountries(this.value);
  });
});

const createCountries = (displayLength) => {
    //clear the container....
  $("#container").empty();
  const tempCountries = allCountries.slice(0, displayLength);
  tempCountries.map((item) => {
    //calculation
    total += item.population;

    //continents
    if (!myContinents[item.continents]) {
      //create our new continet
      myContinents[item.continents] = 1;
    } else {
      //add 1 to existing continent
      myContinents[item.continents] += 1;
    }

    $("#container").append(
      `<div class="Box">
      <b>${item.name.common}</b><hr/>
        <img src="${item.flags.png}" width="100" height="50"/><br/>
        ${item.capital}<br/>
        ${item.population.toLocaleString()}
      </div>`
    );
  });
};

// $(function () {
//   //   countries.map((item) =>
//   //     $("#container").append(`<div class="Box"><b>${item}</b><hr/></div>`)
//   //   );
//   getCountries();
// });
