import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import { useEffect } from "react";
import { fetchHits } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([]);
    setPage(1);
    setSearchQuery(query);
  };

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (!searchQuery.trim()) return;
    const getData = async () => {
      try {
        const data = await fetchHits(query, page, abortController.signal);
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [searchQuery, page]);
  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        query={query}
        onChangeQuery={handleChangeQuery}
      />
      {data.length === 0 && searchQuery && <ErrorMessage />}
      <ImageGallery data={data} />
      <LoadMoreBtn onClick={handleChangePage} />
    </div>
  );
};

export default App;
