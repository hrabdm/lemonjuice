function myFunction() {
    var x = document.getElementById("navBlock");
    if (x.className === "nav-block") {
        x.className += " responsive";
    } else {
        x.className = "nav-block";
    }
}