var productList = [];
const addProduct = () => {
  //itemName, itemPrice, itemType, itemImage
  var itemName = document.getElementById("itemName").value;
  var itemPrice = document.getElementById("itemPrice").value;
  var itemType = document.getElementById("itemType").value;
  var itemImage = document.getElementById("itemImage").value;

  var newItem = new Object();
  newItem.itemName = itemName;
  newItem.itemPrice = itemPrice;
  newItem.itemType = itemType;
  newItem.itemImage = itemImage;
  newItem.itemID = Date.now(); //create new time stamp
  productList.push(newItem);
  makeTable();
  document.getElementById("itemForm").reset();
};

const makeTable = () => {
  var result = "";
  productList.map((item, index) => {
    result += `
            <tr>
                <td>${item.itemID}</td>
                <td><img src="${item.itemImage}" width=100/></td>
                <td>${item.itemName}</td>
                <td>${item.itemPrice}</td>
                <td>${item.itemType}</td>
                <td><button onclick="deleteRow(${item.itemID})">🗑</button></td>
            </tr>
        `;
  });
  document.getElementById("container").innerHTML = result;
};

const deleteRow = (timestamp) => {
  productList=productList.filter(singleItem=> singleItem.itemID != timeStamp)
  makeTable();
};
