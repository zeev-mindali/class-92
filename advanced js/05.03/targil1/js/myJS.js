const colorSelection = {};
var currentColor = "";
var lastColor = "";
var counter = 0;

const getColor = () => {
  //pointer to the element in html
  const colorChooser = document.getElementById("colorChooser").value + "";
  //print the value
  console.log(colorChooser);
  lastColor = currentColor;
  currentColor = colorChooser;
  counter++;

  let myColor = colorChooser.replace("#", "t_");
  console.log(myColor);
  if (!colorSelection[myColor]) {
    colorSelection[myColor] = 1;
  } else {
    colorSelection[myColor] = colorSelection[myColor] + 1;
  }
  console.log(colorSelection);
};

setTimeout(() => {
  console.log("last color: ", lastColor);
  console.log("current color: ", currentColor);
  console.log("counter: ", counter);
  console.log("color object: ", colorSelection);
}, 5000);
