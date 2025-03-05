(function () {
    // Apply styles to the photo with ID 'edPhoto'
    function applyStylesToPhoto() {
      let photo = document.getElementById("edPhoto");
      if (photo) {
        photo.classList.add("rounded-xl", "shadow-lg", "border", "border-gray-300");
      }
    }
  
    // Apply styles to the photo on load
    applyStylesToPhoto();
  })();
  