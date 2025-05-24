import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import { fetchHits } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

// типы можно вынести в types.ts
interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
}

const App = () => {
  const [data, setData] = useState<ImageItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData([]);
    setPage(1);
    setSearchQuery(query);
  };

  const handleChangeQuery = (newQuery: string) => {
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
        setIsLoading(true);
        setIsError(false);
        const result = await fetchHits(
          searchQuery,
          page,
          abortController.signal
        );
        setData((prev) => [...prev, ...result.results]);
        setTotalPages(result.total_pages);
      } catch (error: any) {
        if (error.code !== "ERR_CANCELED") {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [searchQuery, page]);

  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt(null);
  };

  const openModal = (src: string, alt: string | null) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar
        onSubmit={handleSubmit}
        query={query}
        onChangeQuery={handleChangeQuery}
      />
      {data.length === 0 && searchQuery && <ErrorMessage />}
      <ImageGallery data={data} openModal={openModal} />
      {isLoading && <h2>Loading</h2>}
      {isError && <ErrorMessage />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </div>
  );
};

export default App;
