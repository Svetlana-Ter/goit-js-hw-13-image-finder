const BASE_URL = 'https://pixabay.com/api';
const key = '19220688-570d8444e3e62b8d826a97ca4';

export default class ApiService {
  constructor() {
    this.searchQuery = ''
    this.page = 1
  }

  fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      })
      .catch(er => console.log(er))
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
