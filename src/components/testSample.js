import axios from 'axios';

export const cypressIsCool = (somthing) => {
    return somthing + " is cool!"
};


async function getAllPosts() {
   return await axios.get('https://jsonplaceholder.typicode.com/todos');
}

export const allPosts = async () => {
    const posts = await getAllPosts()
    return posts.data
}

