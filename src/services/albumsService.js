import axios from 'axios';

const getAlbumInfo = (userId: string) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
    .then(response => response.data)
    .catch(error => console.log('Album_serviceError', error));
};

export default getAlbumInfo;
