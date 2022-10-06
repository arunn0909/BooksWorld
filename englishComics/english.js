// Check theme and assign Dark mode or Light mode

const selectedTheme = document.cookie;

if (document.cookie == "light")
    document.body.style.background = "white";
else
    document.body.style.background = "black";
