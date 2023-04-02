//document ready
let data = "";
const url="https://restcountries.com/v3.1/all";

$(async()=>{
    data = await $.get(url);
    console.log(data);
})

$("#userInput").on("input",()=>{
    const letter = $("#userInput").val();
    console.log(letter);
    $("#userInput").val("");
    //city
    //country
    $("#result").html("");
    $("#result").append(getCity(letter.toUpperCase()));
    $("#result").append(getCountry(letter.toUpperCase()));
})


const getCity = (letter)=>{
    let result="<tr>";
    for (let counter=0;counter<data.length;counter++){
        if (data[counter].capital){
            if (data[counter].capital[0][0]==letter){
                //console.log(data[counter].capital[0]);
                result+=`<td>${data[counter].capital[0]}</td>`
            }
        }
    }
    result+="</tr>";
    return result;
}

const getCountry = (letter)=>{
    let result="";
    for (let counter=0;counter<data.length;counter++){
        if (data[counter].name.common){
            if (data[counter].name.common[0]==letter){
                //console.log(data[counter].capital[0]);
                result+=`<td>${data[counter].name.common}</td>`
            }
        }
    }
    result+="</tr>";
    return result;
}