document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger-icon");
    const menuList = document.querySelector(".menu-list");

    if (window.innerWidth <= 768) {
        menuList.style.display = "none";
    }

    burgerIcon.addEventListener("click", function () {
        if (menuList.style.display === "none" || menuList.style.display === "") {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        let clickedInsideIcon = burgerIcon.contains(event.target);
        let clickedInsideMenu = menuList.contains(event.target);

        if (!clickedInsideIcon && !clickedInsideMenu) {
            menuList.style.display = "none";
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }
    });
});