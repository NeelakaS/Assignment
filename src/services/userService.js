import axios from 'axios';

const getUserInfo = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .catch(error => console.log('serviceError', error));
};

export default getUserInfo;
