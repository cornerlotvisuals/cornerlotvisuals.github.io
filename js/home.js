document.addEventListener("DOMContentLoaded", function() {
    var scrollToVideoButton = document.getElementById("scrollToVideoButton");
    var video = document.getElementById("video");

    scrollToVideoButton.addEventListener("click", function() {
        video.scrollIntoView({ behavior: 'smooth' });
    });
});