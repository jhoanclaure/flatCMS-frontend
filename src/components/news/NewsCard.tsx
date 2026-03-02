import type { News } from "../../types/news.types";
import "./NewsCard.css";

interface Props {
  news: News;
}

const NewsCard = ({ news }: Props) => {
  return (
    <article className="news-card">
      <div className="news-image" />
      <h3 className="news-title">{news.title}</h3>
      <p className="news-description">{news.description}</p>
      <div className="news-divider" />
    </article>
  );
};

export default NewsCard;