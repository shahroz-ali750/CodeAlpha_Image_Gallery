document.addEventListener("DOMContentLoaded", () => {
  const images = [
    { src: "/Assets/images/car 1.jpg", caption: "Image 1" },
    { src: "/Assets/images/car 2.jpg", caption: "Image 2" },
    { src: "/Assets/images/car 3.jpg", caption: "Image 3" },
    { src: "/Assets/images/car 4.jpg", caption: "Image 4" },
    { src: "/Assets/images/city 1.jpg", caption: "Image 5" },
    { src: "/Assets/images/city 2.jpg", caption: "Image 6" },
    { src: "/Assets/images/city 3.jpg", caption: "Image 7" },
    { src: "/Assets/images/city 4.jpg", caption: "Image 8" },
    { src: "/Assets/images/house 1.jpg", caption: "Image 9" },
    { src: "/Assets/images/house 2.jpg", caption: "Image 10" },
    { src: "/Assets/images/house 3.jpg", caption: "Image 11" },
    { src: "/Assets/images/house 4.jpg", caption: "Image 12" },
    { src: "/Assets/images/night 1.jpg", caption: "Image 13" },
    { src: "/Assets/images/night 2.jpg", caption: "Image 14" },
    { src: "/Assets/images/night 3.jpg", caption: "Image 15" },
    { src: "/Assets/images/night 4.jpg", caption: "Image 16" },
    { src: "/Assets/images/night 5.jpg", caption: "Image 17" },
    { src: "/Assets/images/night 6.jpg", caption: "Image 18" },
  ];

  const gallery = document.getElementById("gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = document.querySelector(".close");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let currentIndex = 0;

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `Image ${index + 1}`;
    img.dataset.index = index;
    img.dataset.caption = image.caption;

    img.addEventListener("click", () => {
      openLightbox(index);
    });

    gallery.appendChild(img);
  });

  function openLightbox(index) {
    lightbox.style.display = "block";
    currentIndex = index;
    updateLightbox();
  }

  function updateLightbox() {
    lightboxImage.src = images[currentIndex].src;
    lightboxCaption.textContent = images[currentIndex].caption;
  }

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  });
});
