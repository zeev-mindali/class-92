var products = [];

const handleData = () => {
  //connect our javascript to html, so each variable will point to an html element
  var pName = document.getElementById("pName").value;
  var pQty = document.getElementById("pQty").value;
  var pPrice = document.getElementById("pPrice").value;
  var pURL = document.getElementById("pURL").value;

  //create an object which will have all our data according to names...
  var newProduct = new Object();
  newProduct.name = pName;
  newProduct.qty = pQty;
  newProduct.price = +pPrice;
  newProduct.url = pURL;
  /*
    json - Java Script Object Notation
    {
        name: "milk",
        qty : 5,
        price: 7,
        url: https://www.tara.co.il/wp-content/uploads/2018/01/7290000474076.png
    }
  */

  //add our new shiny product to our collection of products...
  products.push(newProduct);

  //clear all data for getting next product
  document.getElementById("productForm").reset();

  //create a table from our prodcuts collection
  makeTable();

  //save to user hard disk..
  localStorage.setItem("product_list", JSON.stringify(products));
};

const makeTable = () => {
  //our result for injection
  var result = "";
  //calculate total price of all products
  var totalPrice = 0;
  //iterate on products
  //   for (var index = 0; index < products.length; index++) {
  //     result += `
  //             <tr>
  //                 <td><input type="checkbox"/></td>
  //                 <td><img src="${products[index].url}" width="100"/></td>
  //                 <td>${products[index].name}</td>
  //                 <td>${products[index].qty}</td>
  //                 <td>${products[index].price}</td>
  //                 <td>${products[index].qty * products[index].price}</td>
  //             </tr>
  //         `;
  //     totalPrice += products[index].qty * products[index].price;
  //   }

  //console.log(result);

  products.map((item) => {
    result += `
            <tr>
                <td><input type="checkbox"/></td>
                <td><img src="${item.url}" width="100"/></td>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${item.qty * item.price}</td>
            </tr>
        `;
    totalPrice += item.qty * item.price;
  });

  document.getElementById("productList").innerHTML = result;
  document.getElementById("totalPrice").innerHTML = totalPrice;
};

//zeev: i getting a null error, didn't found the problem...
const retriveData = () => {
  products = JSON.parse(localStorage.getItem("product_list"));
  console.log(products);
  makeTable();
};

retriveData();
