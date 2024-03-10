document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    // Remove '/pages' from the URL
    var urlWithoutPages = url.replace('/pages', '');
    // Remove '/index' from the URL
    var urlWithoutIndex = urlWithoutPages.replace('/index', '');
    // Remove '.html' from the URL
    var urlWithoutHtml = urlWithoutIndex.replace('.html', '');
    window.history.replaceState(null, null, urlWithoutHtml);
});
