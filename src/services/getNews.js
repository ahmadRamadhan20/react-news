require("dotenv").config();
import axios from "axios";

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `?q=${searchQuery}&apikey${process.env.REACT_APP_NEWS_API_KEY}`;
    const endPointURL = `${process.env.REACT_APP_NEWS_API_BASE_URL}${path}${query}`;

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
