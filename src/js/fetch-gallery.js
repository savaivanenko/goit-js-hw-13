const apikey = '18829521-149535e09ae4dfbd453ab9183';

function fetchGallery (submitQuery, page = 1){

  const baseUrl = 'https://pixabay.com/api/';
  let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${submitQuery}&page=${page}&per_page=12&key=${apikey}`;

return fetch(url)
  .then(Response => Response.json())
  // .then((data) => (data.hits))
  .catch('console.error(kapetc);')
}
export default fetchGallery;