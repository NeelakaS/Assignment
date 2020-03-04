import axios from 'axios';

const getPlaceInfo = (albumId: string) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(response => response.data)
    .catch(error => console.log('photo_serviceError', error));
};

export default getPlaceInfo;
