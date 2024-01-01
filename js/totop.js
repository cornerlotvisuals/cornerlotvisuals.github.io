document.addEventListener("DOMContentLoaded", () => {

    // Show/hide the scroll-to-top button based on scroll position
    window.onscroll = scrollFunction;

    // Lazy loading for images and videos
    document.querySelectorAll("img[loading='lazy'], video[loading='lazy']").forEach(element => {
        element.setAttribute("loading", "lazy");
    });
});

const scrollFunction = () => {
    const scrollTopButton = document.getElementById("scrollTopButton");
    const shouldDisplay = document.documentElement.scrollTop > 30;
    scrollTopButton.classList.toggle('visible', shouldDisplay);
};

const easeInOutCubic = progress =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - Math.pow(-2 * progress + 2, 3) / 2;

const scrollToTop = (scrollDuration = 600, easingFunction = easeInOutCubic) => {
    const startTime = performance.now();
    const startScrollY = window.scrollY;

    function scrollToTopAnimation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const easedProgress = easingFunction(progress);

        window.scrollTo(0, startScrollY * (1 - easedProgress));

        if (elapsed < scrollDuration) {
            requestAnimationFrame(scrollToTopAnimation);
        }
    }

    requestAnimationFrame(scrollToTopAnimation);
};

// Example usage:
// scrollToTop(); // Use default values
// scrollToTop(800); // Specify custom duration
// scrollToTop(600, customEasingFunction); // Specify custom duration and easing function
