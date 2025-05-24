import axios from "axios";

export const fetchHits = async (query, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=VE63xGzi_467f3H6_Tii-uSGmp63H_ZIx-CO5UM59iw`,
    { signal }
  );
  return response.data;
};
