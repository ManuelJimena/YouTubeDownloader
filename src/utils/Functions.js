const downloadvideo = async (url, title) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${title}.mp4`;
    link.click();
    URL.revokeObjectURL(blobUrl);
    return true;
  } catch (error) {
    console.error("Error al descargar el video:", error);
  }
};

const downloadaudio = async (url, title) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${title}.mp3`;
    link.click();
    URL.revokeObjectURL(blobUrl);
    return true;
  } catch (error) {
    console.error("Error al descargar el audio:", error);
  }
};

const GetYoutubeID = (url) => {
  const shortExpression = /youtu\.be\/(\w+)/;
  const longExpression = /youtube\.com\/.*[?&]v=([^#&?]+)/;
  const YshortExpression = /\/shorts\/([A-Za-z0-9_-]+)/;

  const shortid = url.match(shortExpression);
  const longid = url.match(longExpression);
  const Yshortid = url.match(YshortExpression);

  if (shortid && shortid[1]) {
    return shortid[1];
  } else if (longid && longid[1]) {
    return longid[1];
  } else if (Yshortid && Yshortid[1]) {
    return Yshortid[1];
  } else {
    return null;
  }
};

const VerifyVideoLink = (url) => {
  const youtubeExpression =
    /^(https?:\/\/)?(www\.|m\.)?(youtu\.be\/|youtube\.com\/(shorts\/)?(embed\/|v\/|watch\?v=|watch\?.+&v=)?)([^#&?]{11})/;
  return youtubeExpression.test(url);
};

const youtubeUtils = {
  downloadvideo,
  downloadaudio,
  GetYoutubeID,
  VerifyVideoLink,
};

export default youtubeUtils;
