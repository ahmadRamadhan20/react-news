import axios from "axios";

// untuk API KEY harusnya di env, tapi karena hanya untuk test saja maka saya taro disini
const NEWS_API_KEY = "5ea378629ec94e1d9894ea8b005cdbc5";
const NEWS_API_BASE_URL = "http://newsapi.org/v2";

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apikey=${NEWS_API_KEY}`;
    const endPointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endPointURL);

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery,
      };
      const resData = { ...res.data, ...additionalObj };

      return resData;
    }
  } catch (error) {
    console.error(`Gagal mendapatkan berita : ${error}`);
  }
};
