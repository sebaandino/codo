document.addEventListener("DOMContentLoaded", function() {
    // Cargar el nav
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navContainer').innerHTML = data;
        });

    // Cargar el footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        });
});