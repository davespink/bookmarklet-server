function makeButton() {
  var theButton = document.createElement("BUTTON");
  var t = document.createTextNode("Click me");
  theButton.appendChild(t);
  widget.appendChild(theButton);
  theButton.style.backgroundColor = "grey";
}

for (i = 0; i < 5; i++)
  makeButton();

function getImages() {
  // Get all <img> elements in the document
  const images = document.querySelectorAll('img');

  // Log the source (src) of each image
  images.forEach((img, index) => {
    console.log(`Image ${index + 1}:`, img.src);
  });

  // If you want to do something with the images, you can loop through them
  // Example: Add a border to all images
  images.forEach(img => {
    img.style.border = '2px solid red';
  });

}
getImages();