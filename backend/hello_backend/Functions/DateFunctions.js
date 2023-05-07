exports.myBday = (bYear) => {
  //console.log("i am in date function");
  return new Date().getFullYear() - bYear.split("/")[3];
  console.log(bYear.split("/")[3]);
  //return "test";
};
