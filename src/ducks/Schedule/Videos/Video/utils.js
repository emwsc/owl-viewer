export function openGameVOD(videoId) {
  window.open(
    `https://player2.majorleaguegaming.com/api/v2/player/embed/vod/owl-web?vid=${videoId}&lang=en-en`,
    "_blank"
  );
}
