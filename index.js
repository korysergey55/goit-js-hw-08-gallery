import galleryItems from "./gallery-items.js";

const galeryInsertReff = document.querySelector(".js-gallery");
const modalWindowReff = document.querySelector(".js-lightbox");
const lightboxImageReff = document.querySelector(".lightbox__image");
const lightboxOverlayReff = document.querySelector(".lightbox__overlay");
const buttonCloseModalReff = document.querySelector(".lightbox__button");

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

  galeryInsertReff.insertAdjacentHTML("afterbegin", marcup);

  return marcup;
}

galeryInsertReff.addEventListener("click", modalWindowOpen);
buttonCloseModalReff.addEventListener("click", modalWindowClose);
window.addEventListener("keyup", modalWindowCloseBtn);
modalWindowReff.addEventListener("click", lightboxOverlayClose);

function atributChange(src = "", alt = "") {
  lightboxImageReff.src = src;
  lightboxImageReff.alt = alt;
}
function modalWindowOpen(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  modalWindowReff.classList.add("is-open");
  atributChange(event.target.dataset.source, event.target.alt);
  // lightboxImageReff.src = event.target.dataset.source;
  // lightboxImageReff.alt = event.target.alt;
}

function modalWindowClose(event) {
  modalWindowReff.classList.remove("is-open");
  atributChange();
  // lightboxImageReff.src = "";
  // lightboxImageReff.alt = "";
}
function modalWindowCloseBtn(event) {
  if (event.code === "Escape") {
    modalWindowReff.classList.remove("is-open");
  }
  console.log(event.code);
}

function lightboxOverlayClose(event) {
  if (event.target === lightboxOverlayReff) {
    modalWindowReff.classList.remove("is-open");
    atributChange();
  }
}
