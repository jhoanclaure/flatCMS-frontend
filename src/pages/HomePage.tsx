import { useState } from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/news/SearchBar";
import NewsList from "../components/news/NewsList";
import CreatePostModal from "../components/modal/CreatePostModal";
import { useNews } from "../hooks/useNews";
import "./HomePage.css";

const HomePage = () => {
  const { news, loading, error } = useNews();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <main className="container">
        <SearchBar onOpen={() => setIsModalOpen(true)} />

        <NewsList news={news} />

        <CreatePostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  );
};

export default HomePage;