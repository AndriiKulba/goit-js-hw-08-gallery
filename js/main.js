const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// const galleryRef = document.querySelector(".js-gallery");
// const createLinksGalleryRef = (image) => {
//   const linkGalleryRef = document.createElement("li");
//   linkGalleryRef.classList.add("gallery__item");

//   linkGalleryRef.insertAdjacentHTML(
//     "beforeend",
//     `<img src="${image.preview}" class="gallery__image" alt="${image.description} class="gallery__image" />`
//   );
//   console.log(linkGalleryRef);
//   return linkGalleryRef;
// };
// const linksGalleryRef = images.map((image) => createLinksGalleryRef(image));
// galleryRef.append(...linksGalleryRef);

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImageRef = document.querySelector(".lightbox__image");
const lightboxbtn = document.querySelector(`[data-action = "close-lightbox"]`);
console.log(lightboxbtn);
const linksGalleryRef = createLinksGalleryRef(images);
galleryRef.insertAdjacentHTML("beforeend", linksGalleryRef);

galleryRef.addEventListener("click", onImageClick);

lightboxRef.addEventListener("click", onBtnCloseClick);

function createLinksGalleryRef(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
      `;
    })
    .join("");
}

function onImageClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  lightboxRef.classList.add("is-open");

  lightboxImageRef.src = e.target.dataset.source;
  lightboxImageRef.alt = e.target.alt;
  console.log(e.target);
  console.log(e.currentTarget);
}

function onBtnCloseClick(e) {
  if (!e.target.classList.contains("lightbox__button")) {
    return;
  }
  lightboxRef.classList.remove("is-open");
  lightboxImageRef.src = " ";
  lightboxImageRef.alt = " ";
  console.log(lightboxImageRef);
}
console.log(lightboxRef);
