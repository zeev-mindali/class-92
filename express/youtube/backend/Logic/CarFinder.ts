import axios from "axios";

const carURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=0866573c-40cd-4ca8-91d2-9dd2d7a492e5&q=";

const carInfo = async (carNumber: string) => {
  //   axios
  //     .get(carURL + carNumber)
  //     .then((dataResponse) => {
  //       console.log(dataResponse.data.result.records[0]);
  //       return dataResponse.data.result.records[0];
  //     })
  //     .catch((err) => console.log(err));

  //
  //   let myData = await axios.get(carURL + carNumber);
  //   console.log(myData);
  //   return myData.data.result;
  console.log("fetching data.....");
  return await axios.get(carURL + carNumber);

  //TIP: try to use Promise...
};

export { carInfo };
