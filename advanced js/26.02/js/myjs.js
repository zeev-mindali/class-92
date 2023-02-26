const victims = [
  "elena",
  "ran",
  "igal",
  "shir",
  "lin",
  "daniel e",
  "daniel b",
  "daniel t",
  "avi",
  "razi",
];

// for (var index = 0; index < victims.length; index++) {
//   console.log(victims[index]);
// }

victims.map((item) => {
  if (item.includes("dani")) {
    console.log(` ** ${item} **`);
  }
});
victims
  .filter((item) => item.includes("daniel"))
  .map((item) => console.log(item));

const myNumbers = {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 },
};

//will not work :(
//var total = 0;
//total = add.map((item) => (total += item.value));

//will work
const total = Object.values(myNumbers).reduce(
  (myTotal, { value }) => myTotal + value,
  0
);

console.log(total);
