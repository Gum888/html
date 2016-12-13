var topMenu = document.querySelector('nav.top-nav ul');

document.querySelector('button.top-nav-button').addEventListener('click', function() {
    topMenu.style.opacity = 1 - topMenu.style.opacity;
});