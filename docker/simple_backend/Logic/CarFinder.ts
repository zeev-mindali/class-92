import axios from "axios";

const carURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

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

  const carData = await axios.get(carURL + carNumber);
  console.log(carURL + carNumber);
  console.log("fetching data.....\n", carData.data.result.records);
  return carData.data.result.records;

  //TIP: try to use Promise...
};

export { carInfo };
