export function getSchedule(firebase, selectedYear) {
    return new Promise((resolve) => {
        const db = firebase.firestore();
        db.collection('schedule').doc(selectedYear.toString()).get().then((doc) => {
            const schedule = doc.data();
            resolve(schedule ? schedule : {});
        });
    });
}