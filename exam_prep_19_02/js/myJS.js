var students = [
  { name: "zeev", age: 49, city: "Kiryat yam" },
  { name: "Ran", age: 30, city: "Rishon Le Tzion" },
  { name: "Raze", age: 24, city: "Akko" },
  { name: "shahar", age: 33, city: "TLV" },
];

var result = "";
students.map((item) => {
  result += `
        <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        </tr>
    `;
});

document.getElementById("studentTable").innerHTML = result;

const getName = () => {
  var userName = document.getElementById("uName").value;

  var result = "";
  if (userName.includes("ran")) {
    result += `<h1>Here is another lie of ${userName}<h1><hr/>`;
  }
  result += `<h1>${userName} is so smart, even bibi is learning how to run a country from ${userName}<h1>`;
  document.getElementById("res").innerHTML = result;
  document.getElementById("myForm").reset();
};
