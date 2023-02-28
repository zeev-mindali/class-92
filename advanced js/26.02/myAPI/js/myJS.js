// const url =
//   "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=5000&q='ירושלים'"; //end point

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

const urlStreet =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=5000&q="; //end point

const urlCity =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1500";

const myCities = fetch(urlCity)
  .then((response) => response.json())
  .then((data) => {
    result = "";
    var myCities = data.result.records;
    myCities.map((item) => (result += `<option>${item["שם_ישוב"]}</option>`));
    document.getElementById("city").innerHTML = result;
  });

const getStreet = () => {
  var city = document.getElementById("city").value;
  var myData = fetch(urlStreet + city)
    .then((response) => response.json())
    .then((data) => {
      street = data.result.records;
      console.log("me ready");
      result = "";
      street.map((item) => (result += `<option>${item["שם_רחוב"]}</option>`));
      document.getElementById("street").innerHTML = result;
    });
};
