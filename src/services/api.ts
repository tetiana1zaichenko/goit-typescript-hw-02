import axios from "axios";

interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

interface FetchHitsResponse {
  results: ImageItem[];
  total_pages: number;
}

export const fetchHits = async (
  query: string,
  page: number,
  signal: AbortSignal
): Promise<FetchHitsResponse> => {
  const response = await axios.get<FetchHitsResponse>(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=VE63xGzi_467f3H6_Tii-uSGmp63H_ZIx-CO5UM59iw`,
    { signal }
  );
  return response.data;
};

// import axios from "axios";

// export const fetchHits = async (query, page, signal) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=VE63xGzi_467f3H6_Tii-uSGmp63H_ZIx-CO5UM59iw`,
//     { signal }
//   );
//   return response.data;
// };
