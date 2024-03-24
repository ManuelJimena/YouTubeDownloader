const MapYoutube = (video) => {
  
  const youtubevideo = {
    id: video.id,
    thumb: video.thumbnail,
    video: video.formats.reverse(),
    title: video.title,
  };
  return youtubevideo;
};

export default MapYoutube;
