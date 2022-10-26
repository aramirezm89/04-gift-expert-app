import axios from 'axios';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=nIbr8tIUO6rLGErsJctq6ECDFM2cKhge&q=${category}&limit=10`;
  const res = await axios.get(url);
  const { data } = res.data;

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
 
  return gifs;
};
