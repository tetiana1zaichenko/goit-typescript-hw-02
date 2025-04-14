import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import { useEffect } from "react";
import { fetchHits } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query.trim()) return;
    const getData = async () => {
      try {
        const data = await fetchHits(query);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);
  return (
    <div>
      <SearchBar
        onSubmit={handleSubmit}
        query={query}
        onChangeQuery={handleChangeQuery}
      />
      <ImageGallery data={data} />
    </div>
  );
};

export default App;
