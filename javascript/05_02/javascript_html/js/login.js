console.log("zeev");

function checkLogin() {
  var uName = document.getElementById("uName").value;
  var uPass = document.getElementById("uPass").value;
  var res = document.getElementById("res");
  if (uName == "admin" && uPass == "admin") {
    res.innerHTML = "<h1><b>Hello my master</b></h1>";
  } else {
    res.innerHTML = "Why who are you?";
  }
}
