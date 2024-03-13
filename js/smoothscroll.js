document.body.addEventListener('wheel', function (e) {
  handleOverscroll(e.deltaY);
});

document.body.addEventListener('mousewheel', function (e) {
  handleOverscroll(e.deltaY);
});

function handleOverscroll(deltaY) {
  if (document.body.scrollTop === 0 && deltaY > 0) {
    // Overscroll at the top, add a bouncing effect
    document.body.style.overscrollBehaviorY = 'auto';
    setTimeout(function () {
      document.body.style.overscrollBehaviorY = 'contain';
    }, 100);
  } else if (document.body.scrollHeight - window.innerHeight === document.body.scrollTop && deltaY < 0) {
    // Overscroll at the bottom, add a bouncing effect
    document.body.style.overscrollBehaviorY = 'auto';
    setTimeout(function () {
      document.body.style.overscrollBehaviorY = 'contain';
    }, 100);
  }
}
