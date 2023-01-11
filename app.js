const navToggle = document.querySelector(".nav-toogle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

    /*if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
    --------or-------------*/
    links.classList.toogle("show-links");
});
