import ENV from "../utils/api";
export class YoutubeVideo {
  async DownloadVideo(id) {
    const url = `${ENV.Video_url}?id=${id}`;
    const params = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ENV.API_Key,
        "X-RapidAPI-Host": ENV.Video_host,
      },
    };

    try {
      const response = await fetch(url, params);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const error = await response.json();
        throw new Error(error.message || "Error al obtener detalles del video.");
      }
    } catch (error) {
      console.error("DownloadVideo error:", error);
      throw new Error(error.message || "Error al conectar con el servicio de video.");
    }
  }
}
