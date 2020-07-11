export const getGifs = async (category) => {
  const apiKey = "nHrPmAp5yVwCM0q8gN5BXvIJ1m7Uc8EJ";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
    category
  )}`;
  try {
    const res = await fetch(url);
    const resData = await res.json();
    return resData.data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
  } catch (error) {
    console.error(error);
  }
};
