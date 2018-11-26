export function onOpenVideosClick(selectedVideos) {
  selectedVideos.forEach((video) => {
    window.open(video.url, '_blank');
  });
}
