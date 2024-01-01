document.addEventListener("DOMContentLoaded", () => {
    // Initial button state
    document.querySelector("#categoryButtons button[data-category='all']").classList.add('active');

    // Show/hide the scroll-to-top button based on scroll position
    window.onscroll = scrollFunction;

    // Lazy loading for images and videos
    document.querySelectorAll("img[loading='lazy'], video[loading='lazy']").forEach(element => {
        element.setAttribute("loading", "lazy");
    });

    // Set up event delegation for portfolio items
    const gallery = document.getElementById("gallery");
    gallery.addEventListener("mouseenter", event => {
        const target = event.target.closest(".portfolio-img-inner");
        if (target) {
            handleHover(target);
        }
    });

    gallery.addEventListener("mouseleave", event => {
        const target = event.target.closest(".portfolio-img-inner");
        if (target) {
            pauseVideo(target);
        }
    });
});

function filterArtworks(button, selectedCategory) {
    const artworks = document.querySelectorAll(".portfolio-img-inner");
    const buttons = document.querySelectorAll("#categoryButtons button");

    artworks.forEach(artwork => {
        const artworkCategories = artwork.getAttribute("data-category").split(',');
        const shouldDisplay = selectedCategory === "all" || artworkCategories.includes(selectedCategory);

        if (shouldDisplay) {
            artwork.style.display = "block";
            artwork.classList.remove('hidden');
        } else {
            // Hide the artwork with a fade-out effect
            artwork.classList.add('hidden');
            setTimeout(() => {
                artwork.style.display = "none";
            }, 100); // Adjust the time based on your transition duration
        }
    });

    // Remove the 'active' class from all buttons
    buttons.forEach(b => b.classList.remove('active'));

    // Add the 'active' class to the clicked button
    button.classList.add('active');
}


const handleHover = element => {
    const hoverCount = parseInt(element.getAttribute("data-hover-count")) || 0;
    const video = element.querySelector('video');

    if (hoverCount === 0 && video.paused) {
        // First hover: Show video and play
        video.play().catch(error => {
            // Handle the error (e.g., browser does not allow autoplay)
            console.error("Error playing video:", error);
        });
    } else if (hoverCount === 1 && !video.paused) {
        // Second hover: Pause video
        if (!video.ended) {
            video.pause();
        }
    } else if (hoverCount === 2 && video.paused) {
        // Third hover: Resume video
        if (!video.ended) {
            video.play().catch(error => {
                // Handle the error (e.g., browser does not allow autoplay)
                console.error("Error playing video:", error);
            });
        }
    }

    // Increment the hover count (looping back to 0 after the third hover)
    element.setAttribute("data-hover-count", (hoverCount + 1) % 3);
};

const pauseVideo = element => {
    // Reset the hover count on mouse leave
    element.setAttribute("data-hover-count", "0");

    // Pause the video
    const video = element.querySelector('video');
    video.pause();
};

const scrollFunction = () => {
	// console.log("Scrolling!"); //for checking scroll
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