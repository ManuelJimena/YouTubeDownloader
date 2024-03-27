import ENV from "../utils/api";
export class YoutubeAudio {
  async DownloadAudio(id) {
    const url = `${ENV.Audio_url}?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': ENV.API_Key,
        'X-RapidAPI-Host': ENV.Audio_host,
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al obtener el enlace de descarga del audio.");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("DownloadAudio error:", error);
      throw error;
    }
  }
}
