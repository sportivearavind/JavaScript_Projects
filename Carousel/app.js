class Carousel {
  constructor(container, options) {
    this.container = container;
    this.carousel = container.querySelector(".carousel");
    this.items = this.carousel.querySelectorAll(".carousel-item");
    this.prevButton = container.querySelector(".prev");
    this.nextButton = container.querySelector(".next");

    this.currentIndex = 0;
    this.autoplay = options.autoplay || false;
    this.interval = options.interval || 3000;
    this.pauseOnHover = options.pauseOnHover || false;
    this.timer = null;

    this.prevButton.addEventListener("click", () => this.prev());
    this.nextButton.addEventListener("click", () => this.next());

    if (this.pauseOnHover) {
      this.container.addEventListener("mouseover", () => this.pause());
      this.container.addEventListener("mouseout", () => this.resume());
    }

    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  startAutoplay() {
    this.timer = setInterval(() => this.next(), this.interval);
  }

  stopAutoplay() {
    clearInterval(this.timer);
  }

  pause() {
    this.stopAutoplay();
  }

  resume() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateCarousel();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.carousel.style.transform = `translateX(${offset}%)`;
  }
}
