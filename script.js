let boton = document.getElementById("icon");
let links = document.getElementById("links");
let count = 0;

boton.addEventListener("click", function() {
    if (count == 0) {
        links.className = ("links two");
        count = 1;
    } else {
        links.classList.remove("two");
        links.className = ("links one");
        count = 0;
    }
})