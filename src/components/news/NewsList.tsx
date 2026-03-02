import type { News } from "../../types/news.types";
import NewsCard from "./NewsCard";
import "./NewsList.css";

interface Props {
  news: News[];
}

const NewsList = ({ news }: Props) => {
  return (
    <section className="news-grid">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </section>
  );
};

export default NewsList;