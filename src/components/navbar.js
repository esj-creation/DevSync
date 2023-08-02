window.addEventListener("scroll",function() {
    const navbar = document.getElementById("nav");
    if(window.scrollY > 0) {
        navbar.classList.add("color");
    }else {
        navbar.classList.remove("color");
    }
});