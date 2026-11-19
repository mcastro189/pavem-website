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

/* NIGHT MODE FOR ALL THREE PAGES */

// Remember the visitor's selected mode
if (localStorage.getItem("pavem-night-mode") === "on") {
    document.body.classList.add("dark-mode");
}

const nightButton = document.getElementById("night-mode");

if (nightButton) {
    nightButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "pavem-night-mode",
            isDark ? "on" : "off"
        );

        nightButton.textContent = isDark ? "Light Mode" : "Night Mode";
    });

    // Display the correct label when the page loads
    if (document.body.classList.contains("dark-mode")) {
        nightButton.textContent = "Light Mode";
    }
}


/* SEARCH SOCCER FIELDS BY CITY */

const cityInput = document.querySelector(".field-search input");
const searchButton = document.querySelector(".field-search button");
const fieldMap = document.querySelector(".map-section iframe");

if (cityInput && searchButton && fieldMap) {
    function searchFields() {
        const city = cityInput.value.trim();

        if (city === "") {
            alert("Please enter a city or ZIP code.");
            return;
        }

        const search = `soccer fields in ${city}, California`;

        fieldMap.src =
            "https://www.google.com/maps?q=" +
            encodeURIComponent(search) +
            "&output=embed";

        fieldMap.title = `Soccer fields near ${city}`;
        fieldMap.scrollIntoView({ behavior: "smooth" });
    }

    searchButton.addEventListener("click", searchFields);

    cityInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchFields();
        }
    });
}