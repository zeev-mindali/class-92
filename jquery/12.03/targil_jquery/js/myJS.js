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

//document ready
$(async () => {
  allCountries = await $.get(allCountriesURL);
  //console.log(allCountries.length);
  createCountries(allCountries);
});

const createCountries = (allCountries) => {
  allCountries.map((item) => {
    total += item.population;
    $("#container").append(
      `<div class="Box">
      <b>${item.name.common}</b><hr/>
        <img src="${item.flags.png}" width="100" height="50"/><br/>
        ${item.capital}<br/>
        ${item.population.toLocaleString()}
      </div>`
    );
  });
  $("#total").html(total.toLocaleString());
};

// $(function () {
//   //   countries.map((item) =>
//   //     $("#container").append(`<div class="Box"><b>${item}</b><hr/></div>`)
//   //   );
//   getCountries();
// });
