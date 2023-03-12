const colors = [
  "azure",
  "red",
  "green",
  "yellow",
  "brown",
  "blue",
  "orange",
  "pink",
  "purple",
  "black",
];

var colorRunner = setInterval(() => {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}, 500);

const changeSpeed = (myValue) => {
  clearInterval(colorRunner);
  var colorRunner = setInterval(() => {
    document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }, myValue);
};


