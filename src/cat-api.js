import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_d61ZKWMbGRcwK4EcsUHUoMj1fxzc3WRSeiHDesEvnTSTF8N4GUWz7QGkNqymBBbz';

const ENDPOINT = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_d61ZKWMbGRcwK4EcsUHUoMj1fxzc3WRSeiHDesEvnTSTF8N4GUWz7QGkNqymBBbz';

export async function fetchBreeds() {
  try {
    const response = await axios.get(`${ENDPOINT}/breeds`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `${ENDPOINT}/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat by breed');
  }
}
