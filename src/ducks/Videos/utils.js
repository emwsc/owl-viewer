import configuredFirebase from '../../firebase/firebase';

export function openGameVOD(videoId) {
  window.open(
    `https://player2.majorleaguegaming.com/api/v2/player/embed/vod/owl-web?vid=${videoId}&lang=en-en`,
    '_blank',
  );
}

export function getRevealText(isExpanded) {
  return isExpanded
    ? 'Hide other videos'
    : 'Show other videos';
}

export async function getMatchInfo(matchId) {
  const firestore = configuredFirebase.firestore();
  const doc = await firestore
    .collection('matches')
    .doc(matchId)
    .get();
  const match = doc.data();
  return match || {};
}
