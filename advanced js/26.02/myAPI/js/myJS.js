const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=5000&q='ירושלים'"; //end point
var street = [];

// var myData = fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     street = data.result.records;
//     console.log("me ready");
//     result = "";
//     street
//       .filter((item) => item["שם_רחוב"].includes("ים"))
//       .map((item) => (result += item["שם_רחוב"] + "<br/>"));
//     document.getElementById("container").innerHTML = result;
//   });

var myData = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    street = data.result.records;
    console.log("me ready");
    result = "";
    street.map((item) => (result += `<option>${item["שם_רחוב"]}</option>`));
    document.getElementById("street").innerHTML = result;
  });
console.log("sync:", myData);
