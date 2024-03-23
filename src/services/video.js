import ENV from "../utils/api";
export class YoutubeVideo {
  async DownloadVideo(id) {
    try {
      const url = `${ENV.Video_url}?id=${id}`;

      const params = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": ENV.API_Key,
          "X-RapidAPI-Host": ENV.Video_host,
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
