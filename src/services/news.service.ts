import type { News } from "../types/news.types";

export const getNews = async (): Promise<News[]> => {
  // Simulación API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "TÍTULO DE LA NOTICIA",
          description:
            "Ha sobrevivido no solo cinco siglos, sino también la transición a la composición tipográfica electrónica, manteniéndose prácticamente inalterado.",
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "TÍTULO DE LA NOTICIA",
          description:
            "Ha sobrevivido no solo cinco siglos, sino también la transición a la composición tipográfica electrónica.",
          createdAt: new Date().toISOString(),
        },
        
        {
          id: "3",
          title: "TÍTULO DE LA NOTICIA",
          description:
            "Ha sobrevivido no solo cinco siglos, sino también la transición a la composición tipográfica electrónica.",
          createdAt: new Date().toISOString(),
        },
      ]);
    }, 500);
  });
};