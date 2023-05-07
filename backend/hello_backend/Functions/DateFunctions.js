exports.myBday = (bYear) => {
  console.log("i am in date function");
  return new Date().getFullYear() - bYear.split("/")[2];
};
