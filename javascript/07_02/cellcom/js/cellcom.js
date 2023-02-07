console.log("welcome to cellcom");

//create array for each department....
var lab = [];
var service = [];
var sales = [];

// console.log("my lab:", lab);
// lab.push("052-404-3142");
// lab.push("055-555-5555");
// console.log("my lab:", lab);
// console.log("getting last number:", lab.pop());
// console.log("my lab:", lab);

const addNumber = () => {
  const reqService = document.getElementById("reqService").value;
  const userTel = document.getElementById("userTel").value;
  console.log(reqService);
  //Sales, Service, Lab
  switch (reqService) {
    case "Sales":
      sales.push(userTel);
      createSales();
      break;
    case "Service":
      service.push(userTel);
      break;
    case "Lab":
      lab.push(userTel);
      break;
    default:
      alert("אביתרררררררררררר");
  }
};

const createSales = () => {
  var result = "";
  for (var index = 0; index < sales.length; index++) {
    result += `<tr><td><span class="myHeader">${sales[index]}</span></td></tr>`;
  }
  document.getElementById("tSales").innerHTML = result;
};
