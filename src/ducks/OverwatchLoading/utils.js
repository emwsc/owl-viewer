import { LOADING_TEXTS } from "./constants";

export function getRandomLoadingPhrase(lang) {
  const min = 0;
  const max = LOADING_TEXTS[lang].length - 1;
  const index = Math.round(Math.random() * (max - min) + min);
  return LOADING_TEXTS[lang][index];
}
