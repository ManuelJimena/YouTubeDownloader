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

    const fetchAudio = async () => {
      const response = await fetch(url, params);
      if (!response.ok) throw new Error('Failed to fetch audio');
      const result = await response.json();
      if (result.status === "processing") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return fetchAudio();
      }
      return result;
    };

    try {
      return await fetchAudio();
    } catch (error) {
      console.error("Error al descargar el audio:", error);
      return { status: 'fail', message: 'Error al descargar el audio' };
    }
  }
}
