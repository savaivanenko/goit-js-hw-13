import refs from './refs'
import galleryTemp from '../templates/gallery.hbs'

function updateGalleryMarkup (hits) {
  const galleryMarkup =  galleryTemp(hits)
  // refs.galleryList.innerHTML = galleryMarkup;
  refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup)
}
export default updateGalleryMarkup