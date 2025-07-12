document.getElementById("menuToggle").addEventListener("click", function() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});