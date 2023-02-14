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

  //add our new shiny product to our collection of products...
  products.push(newProduct);

  //clear all data for getting next product
  document.getElementById("productForm").reset();

  //create a table from our prodcuts collection
  makeTable();
};

const makeTable = () => {
  //our result for injection
  var result = "";
  //calculate total price of all products
  var totalPrice = 0;
  //iterate on products
  for (var index = 0; index < products.length; index++) {
    result += `
            <tr>
                <td><input type="checkbox"/></td>
                <td><img src="${products[index].url}" width="100"/></td>
                <td>${products[index].name}</td>
                <td>${products[index].qty}</td>
                <td>${products[index].price}</td>
                <td>${products[index].qty * products[index].price}</td>
            </tr>
        `;
    totalPrice += products[index].qty * products[index].price;
  }
  //console.log(result);
  document.getElementById("productList").innerHTML = result;
  document.getElementById("totalPrice").innerHTML = totalPrice;
};
