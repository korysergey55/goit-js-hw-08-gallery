import galleryItems from "./gallery-items.js";

const toGaleryInsert = document.querySelector(".js-gallery");

const createHTML = createMarkup(galleryItems);

function createMarkup(items) {
  const marcup = items
    .map(
      (item) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
  
  toGaleryInsert.insertAdjacentHTML("afterbegin", marcup);

   return marcup;
}
