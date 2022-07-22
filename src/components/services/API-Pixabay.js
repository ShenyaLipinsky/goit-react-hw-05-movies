const axios = require('axios').default;

const URI = 'https://pixabay.com/api/';
const API_KEY = '27515696-8635174e5d1dc6e80848b95cf';

async function fetchImages(queue, page) {
  const response = await axios.get(URI, {
    params: {
      q: queue,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  // .then(response => {
  //   let data = response.data.hits.map(item => {
  //     let data = {
  //       id: item.id,
  //       webformatURL: item.webformatURL,
  //       largeImageURL: item.largeImageURL,
  //     };
  //     return data;
  //   });
  //   return data;
  // });

  return response.data;
}

export default fetchImages;
