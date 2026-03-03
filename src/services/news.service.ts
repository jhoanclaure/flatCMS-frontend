{/*import type { News } from "../types/news.types";

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
};*/}
export const getNews = async () => {
  const response = await fetch("https://flatcms-backend-1.onrender.com/api/news");

  if (!response.ok) {
    throw new Error("Error al obtener noticias");
  }

  return response.json();
};

export const createNews = async (data: {
  title?: string;
  content: string;
  image?: File | null;
}) => {
  const formData = new FormData();

  formData.append("title", data.title || "");
  formData.append("content", data.content);

  if (data.image) {
    formData.append("image", data.image); // debe llamarse igual que upload.single("image")
  }

  const response = await fetch("https://flatcms-backend-1.onrender.com/api/news", {
    method: "POST",
    body: formData, // ⚠️ SIN headers
  });

  if (!response.ok) {
    throw new Error("Error al crear noticia");
  }

  return response.json();
};