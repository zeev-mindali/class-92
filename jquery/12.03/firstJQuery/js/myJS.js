//old style
// $(document).ready(function () {
//   console.log("zeevik the fox!!!");
// });

//new style - the function will be run only when the document is uploaded.....cur
$(function () {
  console.log("zeevik the fox!!!");
  document.getElementById("res").innerHTML = "Hello lin";
  //no jquery
  //changeNoJquery();
  //with jquery
  changeWithJquery();
});

const changeWithJquery = () => {
  $("#moto").val("Mess with the best and die like the rest...");
  $("#res").html("<br/><b>class 92 - the best that lecturer can get</b>");
  //change type of input element
  //$("#bdDate").attr("type", "date");
};

const changeNoJquery = () => {
  //without jquery syntex
  //chage value of input element
  document.getElementById("moto").value =
    "Mess with the best and die like the rest...";
  document.getElementById("res").innerHTML =
    "<br/><b>class 92 - the best that lecturer can get</b>";
};
