// PAVEM Interactive Image Gallery

const galleryImages = document.querySelectorAll(".soccer-gallery img");
const galleryModal = document.getElementById("gallery-modal");
const largeImage = document.getElementById("large-image");
const closeGallery = document.getElementById("close-gallery");
const nextImage = document.getElementById("next-image");
const prevImage = document.getElementById("prev-image");

if (galleryModal && galleryImages.length > 0) {
    let currentImage = 0;

    function showImage(index) {
        currentImage = (index + galleryImages.length) % galleryImages.length;
        largeImage.src = galleryImages[currentImage].src;
        largeImage.alt = galleryImages[currentImage].alt;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            showImage(index);
            galleryModal.style.display = "flex";
        });
    });

    closeGallery.addEventListener("click", () => {
        galleryModal.style.display = "none";
    });

    nextImage.addEventListener("click", () => {
        showImage(currentImage + 1);
    });

    prevImage.addEventListener("click", () => {
        showImage(currentImage - 1);
    });

    galleryModal.addEventListener("click", (event) => {
        if (event.target === galleryModal) {
            galleryModal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            galleryModal.style.display = "none";
        }
    });
}

const nightButton = document.getElementById("night-mode");

if (nightButton) {
    nightButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}