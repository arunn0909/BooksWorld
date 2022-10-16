// Check theme and assign Dark mode or Light mode

const selectedTheme = document.cookie;
const body = document.querySelector("body");
const titletxt = document.getElementsByClassName("titletext");

if (document.cookie == "light") {
    document.getElementById("txt").style.color = "black";
    document.getElementById("txt2").style.color = "black";
    document.getElementById("inpts").style.color = "black";
    document.getElementById("inpts2").style.color = "black";
    document.body.style.background = "white";
}
else {
    document.getElementById("txt").style.color = "wheat";
    document.getElementById("txt2").style.color = "wheat";
    document.getElementById("inpts").style.color = "white";
    document.getElementById("inpts2").style.color = "white";
    document.body.style.background = "black";
}
