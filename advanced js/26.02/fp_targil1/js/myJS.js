const products = [
  "milk",
  "bread",
  "almond milk (ichas)",
  "soya milka (also ichas)",
  "tomato",
  "cherry tomato",
  "corn bread",
  "black bread",
  "white bread",
  "chala bread",
];
const searchMe = () => {
  const searchItem = document.getElementById("filterList").value;
  var result = "";
  products
    .filter((item) => item.includes(searchItem))
    .map((item) => (result += item + "<br/>"));
  document.getElementById("container").innerHTML = result;
};

//container
