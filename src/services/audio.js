import ENV from "../utils/api";
export class YoutubeAudio {
  async DownloadAudio(id) {
    try {
      const url = `${ENV.Audio_url}?id=${id}`;

      const params = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": ENV.API_Key,
          "X-RapidAPI-Host": ENV.Audio_host,
        },
      };

      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        throw response;
      }
    } catch (error) {
      return error;
    }
  }
}
