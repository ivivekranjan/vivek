function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "head-right") {
        x.className += " responsive";
    } else {
        x.className = "head-right";
    }
}