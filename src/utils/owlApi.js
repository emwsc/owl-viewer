export function owlGetTeams() {
    return fetch('https://api.overwatchleague.com/teams');
}

export function owlGetTeamDetailedData(teamid) {
    return fetch('https://api.overwatchleague.com/teams/' + teamid)
}