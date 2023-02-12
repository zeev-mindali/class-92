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
      sales.unshift(userTel);
      createSales();
      break;
    case "Service":
      service.unshift(userTel);
      createService();
      break;
    case "Lab":
      lab.unshift(userTel);
      createLab();
      break;
    default:
      alert("אביתרררררררררררר");
  }
  document.getElementById("userTel").value = "";
  document.getElementById("reqService").value = "Sales";
};

const createSales = () => {
  var result = "";
  for (var index = sales.length - 1; index >= 0; index--) {
    result += `<tr><td><span class="myHeader">${sales[index]}</span></td></tr>`;
  }
  document.getElementById("tSales").innerHTML = result;
};

const createLab = () => {
  var result = "";
  for (var index = 0; index < lab.length; index++) {
    result += `<tr><td><span class="myHeader">${lab[index]}</span></td></tr>`;
  }
  document.getElementById("tLab").innerHTML = result;
};

const createService = () => {
  var result = "";
  for (var index = 0; index < service.length; index++) {
    result += `<tr><td><span class="myHeader">${service[index]}</span></td></tr>`;
  }
  document.getElementById("tService").innerHTML = result;
};

const nextSales = () => {
  //boolen show not show
  var show = false;
  //get last cell in the array => number || undefined
  var nextNumber = sales.pop();
  //pointer to html element in our document...
  document.getElementById("s_sales").innerHTML =
    //short if => condition?true:false;
    nextNumber == undefined ? "FREE" : nextNumber;
  createSales();
  setTimeout(() => {
    clearInterval(cellBlink);
    document.getElementById("s_sales").style.visibility = "visible";
  }, 5000);

  var cellBlink = setInterval(() => {
    show = !show;
    document.getElementById("s_sales").style.visibility = show
      ? "visible"
      : "hidden";
  }, 500);
};

const nextLab = () => {};

const nextService = () => {};

// var myTime = new Date();
// console.log(myTime.toLocaleString());

setInterval(() => {
  document.getElementById("userTime").innerHTML = new Date().toLocaleString();
}, 1000);
