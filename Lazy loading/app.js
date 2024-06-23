// inspired from https://codepen.io/imagekit_io/pen/MBNwKB?editors=1000

document.addEventListener("DOMContentLoaded", function(){
    var lazyLoadImages = document.querySelectorAll("img.lazy");
    var lazyLoadThrottleTimeout;

    function lazyload(){
      // if already lazyLoadThrottleTimeout is in use, then clearTimeout
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function () {
        // it defines current vertical scroll position
        var scrollTop = window.pageYOffset;
        lazyLoadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            // img.src will instantly load the image to the document
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        if (lazyLoadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          document.removeEventListener("resize", lazyload);
          document.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll",lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationchange", lazyload);
});