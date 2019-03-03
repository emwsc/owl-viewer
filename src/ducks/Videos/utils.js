import configuredFirebase from "../../firebase/firebase";
import { DICTIONARY, WORD_KEYS } from "./constants";

export function openGameVOD(videoId) {
  window.open(
    `https://player2.majorleaguegaming.com/api/v2/player/embed/vod/owl-web?vid=${videoId}&lang=en-en`,
    "_blank"
  );
}

export function getRevealText(isExpanded, lang) {
  return isExpanded
    ? DICTIONARY[lang + WORD_KEYS.HIDE_VIDEOS]
    : DICTIONARY[lang + WORD_KEYS.SHOW_VIDEOS];
}

export async function getMatchInfo(matchId) {
  const firestore = configuredFirebase.firestore();
  const doc = await firestore
    .collection("matches")
    .doc(matchId)
    .get();
  const match = doc.data();
  return match || {};
}
