let daysoftheweek = ("Sunday","Monday","TUesday","Wednesday","Thursday","Friday","Saturday")
let female = ("Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama")
let male = ("Kwasi","Kwadwa","Kwabena","Kwaku","Yaw","Kofi","Kwame")

function validateForm() {
let year = getElementById("TheYear").value
let month = getElementById("TheMonth").value
let day = getElementById("TheDay").value

if (year==""|| month==""|| day=="") {
    console.log ()
    alert("Kindly fill in the required details")
    return false; 
} else {
    getuserdetails()
    }
}

var getuserdetails = function () {
    letInputYear = document.getElememtById("TheYear").value
    letIntyear = parseInt(Inputyear)

    letInputMonth = document.getElememtById("TheMonth").value
    letIntmonth = parseInt(letInputmonth)

    letInputDay = document.getElememtById("TheDay").value
    letIntday = parseInt(letInputDay)

    let Inputgender = document.getElememtById("gender").value
    let akanName;
}

if (intyear<=0 || intyear>2021) {
    console.log()
    alert ("Fill in a valid year")
    return false;
}
if (intmonth<=0 || intmonth>12) {
    console.log()
    alert ("Fill in a valid month")
    return false;
}
if (intdate<=0 || intdate>31){
    console.log()
    alert ("Fill in a valid date")
    return false;
}

let MIT = parseInt(Input.slice(0, 2));
let YY = parseInt(Input.slice(2, 4));
let MM = parseInt(Input month)+1;
let DD = parseInt(Input date);
let Dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

let day = Math.round (Dayoftheweek);

if (Inputgender==="Female") {
    akannames = femalenames[day]
    document.getElementById("output").innerHTML = "You Akan name"+akanName;
}
else if(Input gender==="Male") {
    akannames = malesnames[day]
    document.getElememtById("output").innerHTML = "You Akan name"+akanName;
}

