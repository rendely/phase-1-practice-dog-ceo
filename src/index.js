
window.addEventListener('DOMContentLoaded', init);

function init() {
  imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  breedUrl = "https://dog.ceo/api/breeds/list/all";
  dogImageContainer = document.querySelector('#dog-image-container');
  breedsList = document.querySelector('#dog-breeds');
  fetchImages();
  fetchBreeds();
  setupDropdown();
}
function fetchImages() {
  fetch(imgUrl)
    .then(r => r.json())
    .then(d => showImages(d.message))
    .catch(e => console.log(e))
}

function showImages(urls) {
  urls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.width = 300;
    dogImageContainer.appendChild(img);
  })

}

function fetchBreeds() {
  fetch(breedUrl)
    .then(r => r.json())
    .then(d => {
      breeds = d.message;
      showBreeds();
    })
    .catch(e => console.log(e))
}

function showBreeds(filterLetter = null) {
  breedsList.innerHTML = '';
  Object.keys(breeds).forEach(breed => {
      console.log(filterLetter === null)
    if (filterLetter === null || filterLetter === breed[0].toLowerCase()) {
      breedItem = document.createElement('li');
      breedItem.innerText = breed;
      breedsList.appendChild(breedItem);
    }
  })
}

function setupDropdown() {
  const breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', () => {
    showBreeds(String(breedDropdown.value));
  })
}

