var allUsers = localStorage.getItem("users")
  ? localStorage.getItem("users")
  : [];
const saveData = () => {
  var userName = document.getElementById("uName").value;
  allUsers.push(userName);
  localStorage.setItem("users", JSON.stringify(allUsers));
};
