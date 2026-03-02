import { useEffect, useState } from "react";
import { getNews } from "../services/news.service";
import type { News } from "../types/news.types";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data);
      } catch (err) {
        setError("Error cargando noticias");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};