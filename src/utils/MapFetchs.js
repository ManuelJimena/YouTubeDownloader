const MapYoutube = (video) => {
  const sortedFormats = video.formats.sort((a, b) => {

    const qualityA = parseInt(a.qualityLabel.replace('p', ''), 10);
    const qualityB = parseInt(b.qualityLabel.replace('p', ''), 10);

    return qualityB - qualityA;
  });

  const highestQualityFormat = sortedFormats[0];

  const youtubevideo = {
    id: video.id,
    thumb: video.thumbnail,
    video: [highestQualityFormat],
    title: video.title,
  };

  return youtubevideo;
};

export default MapYoutube;
