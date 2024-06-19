document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const menuItems = document.querySelectorAll("#navbar ");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "#e63946"; 
        });
        item.addEventListener("mouseout", function() {
            item.style.backgroundColor = "";
        });
    });
});
