export function getOwlTeams(firebase) {
    return new Promise((resolve) => {
        const db = firebase.firestore();
        db.collection('teams').orderBy('name').get().then((querySnapshot) => {
            const teams = [];
            querySnapshot.forEach((doc) => {
                teams.push(doc.data());
            });
            resolve(teams);
        });
    });
}