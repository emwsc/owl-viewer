import { BASE_VIDEO_URL, LOCALE_APPENDIX } from './constants';

export function owlGetTeams() {
  return fetch('https://api.overwatchleague.com/teams');
}

export function owlGetTeamDetailedData(teamid) {
  return fetch(`https://api.overwatchleague.com/teams/${teamid}`);
}

export function getVodsJson(matchid) {
  return fetch(BASE_VIDEO_URL + matchid + LOCALE_APPENDIX).then(result => result.json());
}
