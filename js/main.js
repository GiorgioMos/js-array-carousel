let imageId = 1;

function nextImage () {

    hideImage (imageId);
    imageId = imageId + 1;
    if (imageId == 6) {
        imageId = 1;
    }
    showImage (imageId);
}

function previousImage () {

    hideImage (imageId);
    imageId = imageId - 1;
    if (imageId == 0) {
        imageId = 5;
    }
    showImage (imageId);

}

function hideImage (x) {

    document.getElementById (x.toString()).classList.add ("hidden");
    document.getElementById (x.toString()).classList.remove ("display");

}

function showImage (y) {

    document.getElementById (y.toString()).classList.remove ("hidden");
    document.getElementById (y.toString()).classList.add ("display");

}