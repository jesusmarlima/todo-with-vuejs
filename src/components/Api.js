import axios from 'axios';

export const allPosts =  () => {
  return  axios.get('https://jsonplaceholder.typicode.com/todos');
};

