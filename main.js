// Next button
function nextImage() {
    var path = document.getElementById("comicImg").src;
    path = path.substr(path.lastIndexOf("/") + 1, path.length)
    path = path.replace(".png", "");
    path = parseInt(path) + 1;
    checkImage(path);
}

// Prev button
function prevImage() {
    var path = document.getElementById("comicImg").src;
    path = path.substr(path.lastIndexOf("/") + 1, path.length);
    path = path.replace(".png", "");
    path = parseInt(path) - 1;
    checkImage(path);
}

// Check if image exists
function checkImage(image) {
    var img = new Image();
    img.src = "../img/" + image + ".png";

    // If image exists display it
    img.onload = function() {
        document.getElementById("comicImg").src = img.src;
        document.getElementById("imgCount").innerText = image;
    }

    // If image doesn't don't do anyting
    img.onerror = function() {
        
    }
    
}