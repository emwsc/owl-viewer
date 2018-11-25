import { CLIENT_ID } from '../twitch_api/integration'

export function getOwlTeams(firebase) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore();
        db.collection("teams").orderBy('name').get().then((querySnapshot) => {
            let teams = [];
            querySnapshot.forEach((doc) => {
                teams.push(doc.data());
            });
            resolve(teams);
        });
    });
}

export function getTeamSchedule(firebase, teamid) {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore();
        db.collection("schedule").doc('2018').get().then((doc) => {
            const schedule = doc.data();
            let matches = [];
            schedule.stages.forEach(stage => {
                stage.weeks.forEach(week => {
                    const selectedMatches = week.matches.filter(match => {
                        return match.competitors.some(team => team.id === teamid);
                    }).map(match => { return { ...match, startDate: timeConverter(match.startDate) } });
                    if (selectedMatches && selectedMatches.length > 0) {
                        matches = matches.concat(selectedMatches);
                    }
                })
            })
            debugger;
            resolve(matches);
        });
    })
}



export function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    return a;
}


export function searchGameOnTwitch(teamOne, teamTwo, gameDate) {
    //title: "Full Match | London Spitfire vs. Los Angeles Valiant"
    //recorded_at: "2018-07-20T23:01:18Z"
    return searchGameOnTwitchInner(teamOne, teamTwo, gameDate.toLocaleDateString(), 0);
}


function searchGameOnTwitchInner(teamOne, teamTwo, gameDate, offset) {
    return fetch('https://api.twitch.tv/kraken/channels/137512364/videos?limit=100&offset=' + offset, {
        method: "GET",
        headers: {
            "Client-ID": CLIENT_ID,
            "Accept": "application/vnd.twitchtv.v5+json"
        },
    }).then(response => { return response.json() }).then((results) => {
        debugger;
        let selectedVideos = results.videos.filter(video => {
            let date = new Date(video.recorded_at).toLocaleDateString()
            return date === gameDate && video.title.indexOf('Full Match') > -1 && video.title.indexOf(teamOne) > -1 && video.title.indexOf(teamTwo) > -1
        });
        if (selectedVideos && selectedVideos.length > 0)
            return selectedVideos;
        if (results.videos.length === 0)
            return null;
        return searchGameOnTwitchInner(teamOne, teamTwo, gameDate, offset + 100);
    });
}


export const DEFAULT_SEARCH_TEXT = 'Search in progess...';
export const VIDEOS_NOT_FOUND = 'VODs not found';
export const VIDEOS_FOUND = 'VODs found';