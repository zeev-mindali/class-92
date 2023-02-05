/*

תרגיל כיתה

קילטו משכורת של מהמשתמש
הציגו כמה הוא צריך לשלם מעשרות 10%    
20% וכמה הוא צריך לשלם חומש


*/

function calcualte() {
  var sum = +document.getElementById("salary").value;
  //   ch10 = sum * 0.1;
  //   ch20 = sum * 0.2;
  //   document.getElementById("res").innerHTML =
  //     "10% -> " + ch10 + "<br/>20% -> " + ch20;
  document.getElementById("res").innerHTML = document.getElementById(
    "res"
  ).innerHTML = `
    10% -> ${sum * 0.1} <br/>
    20% -> ${sum * 0.2} <hr/>
    `;
}

var name1 = "zeev";
var name2 = "daniel";
var name3 = "razi";
var name4 = "yelena";

//var myTable = "<table><td>"+name1+"</td><td>"+name2...
var myTable = `
    <table>
        <td>${name1}</td>
        <td>${name2}</td>
        <td>${name3}</td>
        <td>${name4}</td>
    </table>
`;
