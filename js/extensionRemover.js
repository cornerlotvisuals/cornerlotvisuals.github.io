document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    url = url.split('.html')[0];
    window.history.replaceState( null, null, url );
});

document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    url = url.split('/index')[0];
    window.history.replaceState( null, null, url );
});

document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    url = url.split('/pages')[0];
    window.history.replaceState( null, null, url );
});