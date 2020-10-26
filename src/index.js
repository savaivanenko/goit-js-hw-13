import './styles.scss';
import imagesObj from './js/gallreyServis';
import refs from './js/refs'
import updateGalleryMarkup from './js/updateGallery'

let submitQuery = '';
let page = 1;

refs.input.addEventListener('submit', event => {
  event.preventDefault();

  submitQuery = event.currentTarget.elements.query.value;
  page = 1;
  refs.galleryList.innerHTML = ''; 
  imagesObj.fetchGallery(submitQuery, page).then(data => (data.hits))
    // .then(updateGalleryMarkup) 
    .then(hits => {updateGalleryMarkup(hits);
      page += 1;
    })
  }
) 

refs.loadMoreBtn.addEventListener('click', () => { 

  imagesObj.fetchGallery(submitQuery, page).then(data => (data.hits))
  .then(hits => {updateGalleryMarkup(hits);
  page += 1;

  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior:'smooth',
  });
  
  })
})
  