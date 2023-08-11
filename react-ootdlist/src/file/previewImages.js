function previewImages(e) {
  const previewContainer = document.getElementById("preview-container");
  previewContainer.innerHTML = "";

  const files = e.target.files;

  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const imageElement = document.createElement("img");
      imageElement.classList.add("preview-image");
      imageElement.file = file;

      previewContainer.appendChild(imageElement);

      const reader = new FileReader();
      reader.onload = (function (img) {
        return function (e) {
          img.src = e.target.result;
        };
      })(imageElement);

      reader.readAsDataURL(file);
    }
  }
}
