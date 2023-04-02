var img = document.getElementById('image');

if (window.innerWidth > 900) {
    img.src = "images/image-hero-desktop.png";

} else {
    img.src = 'images/image-hero-mobile.png';
    img.width = 500;
}

