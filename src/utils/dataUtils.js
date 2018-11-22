import { owlGetTeams, owlGetTeamDetailedData } from './owlApi';
import { CLIENT_ID } from '../twitch_api/integration'

export function getOwlTeams() {
    return owlGetTeams().then(response => {
        return response.json();
    })
}

export function getOwlTeamDetailedData(teamid) {
    return owlGetTeamDetailedData(teamid).then(response => {
        return response.json();
    }).then(competitor => {
        competitor.schedule = competitor.schedule.map(game => { return { ...game, startDate: timeConverter(game.startDate) } }).sort((a, b) => a.startDate - b.startDate);
        return competitor;
    })
}



export function timeConverter(UNIX_timestamp) {

    var a = new Date(UNIX_timestamp);
    // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();
    // var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    //return time;
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