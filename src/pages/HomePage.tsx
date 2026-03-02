import Header from "../components/layout/Header";
import SearchBar from "../components/news/SearchBar";
import NewsList from "../components/news/NewsList";
import { useNews } from "../hooks/useNews";
import "./HomePage.css";

const HomePage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <p style={{ textAlign: "center" }}>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <main className="container">
        <SearchBar />
        <NewsList news={news} />
      </main>
    </>
  );
};

export default HomePage;