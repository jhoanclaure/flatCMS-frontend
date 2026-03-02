import Header from "../components/layout/Header";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsList from "../components/news/NewsList";
import { useNews } from "../hooks/useNews";

const HomePage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <main style={styles.container}>
        <FeaturedNews />
        <NewsList news={news} />
      </main>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1rem",
  },
};

export default HomePage;