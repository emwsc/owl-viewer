import configuredFirebase from "../../firebase/firebase";

export function getOwlTeams() {
  return new Promise(resolve => {
    const db = configuredFirebase.firestore();
    db.collection("teams")
      .orderBy("name")
      .get()
      .then(querySnapshot => {
        const teams = [];
        querySnapshot.forEach(doc => {
          teams.push(doc.data());
        });
        resolve(teams);
      });
  });
}
