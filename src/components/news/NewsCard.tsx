import { News } from "../../types/news.types";
import ImagePlaceholder from "../ui/ImagePlaceholder";

interface Props {
  news: News;
}

const NewsCard = ({ news }: Props) => {
  return (
    <article style={styles.card}>
      <ImagePlaceholder height="180px" />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </article>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
};

export default NewsCard;