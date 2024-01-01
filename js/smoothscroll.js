 // Add overscroll effects using JavaScript
    document.body.addEventListener('wheel', function (e) {
      if (document.body.scrollTop === 0 && e.deltaY > 0) {
        // Overscroll at the top, add a bouncing effect
        document.body.style.overscrollBehaviorY = 'auto';
        setTimeout(function () {
          document.body.style.overscrollBehaviorY = 'contain';
        }, 100);
      } else if (document.body.scrollHeight - window.innerHeight === document.body.scrollTop && e.deltaY < 0) {
        // Overscroll at the bottom, add a bouncing effect
        document.body.style.overscrollBehaviorY = 'auto';
        setTimeout(function () {
          document.body.style.overscrollBehaviorY = 'contain';
        }, 100);
      }
    });