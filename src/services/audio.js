import ENV from "../utils/api";
export class YoutubeAudio {
  async DownloadAudio(id) {
    const url = `${ENV.Audio_url}?id=${id}`;
    const params = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ENV.API_Key,
        "X-RapidAPI-Host": ENV.Audio_host,
      },
    };

    try {
      const response = await fetch(url, params);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const error = await response.json();
        throw new Error(error.message || "Error al obtener el enlace de descarga del audio.");
      }
    } catch (error) {
      console.error("DownloadAudio error:", error);
      throw new Error(error.message || "Error al conectar con el servicio de audio.");
    }
  }
}
