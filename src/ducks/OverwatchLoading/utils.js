import { LOADING_TEXTS } from "./constants";

export function getRandomLoadingPhrase() {
  const min = 0;
  const max = LOADING_TEXTS.length - 1;
  const index = Math.round(Math.random() * (max - min) + min);
  return LOADING_TEXTS[index];
}
