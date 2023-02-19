var students = [
  { name: "zeev mindali", age: 49 },
  { name: "daniel kar", age: 22 },
  { name: "ran tzioni", age: 30 },
];

localStorage.setItem("demo1", JSON.stringify(students));

//students.pop();
var newStudents = students.filter((item) => item.name == "zeev mindali");

localStorage.setItem("demo1", JSON.stringify(newStudents));
