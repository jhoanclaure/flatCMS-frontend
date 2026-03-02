import { News } from "../../types/news.types";
import NewsCard from "./NewsCard";

interface Props {
  news: News[];
}

const NewsList = ({ news }: Props) => {
  return (
    <section style={styles.grid}>
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </section>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
};

export default NewsList;