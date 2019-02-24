import configuredFirebase from "../../firebase/firebase";
import moment from "moment";
moment().format();

export function getMatches() {
  return new Promise(resolve => {
    const firestore = configuredFirebase.firestore();
    const matchesRef = firestore.collection("matches");
    const timeLimit =
      moment()
        .add(-7, "days")
        .unix() * 1000;
    matchesRef
      .where("startDate", ">=", timeLimit)
      .get()
      .then(querySnapshot => {
        const matches = [];
        querySnapshot.forEach(doc => matches.push(doc.data()));
        resolve(matches);
      });
  });
}
