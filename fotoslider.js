// Array of image paths (replace these with the actual image paths in your project)
const images = ["images/image1.bmp", "images/image2.bmp", "images/image3.bmp"];

let currentIndex = 0;

// Function to show the current image
function showImage(index) {
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.src = images[index];
}

// Function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Initialize the slider with the first image
showImage(currentIndex);
