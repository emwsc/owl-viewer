import { getDBStore } from '../../../utils/db';
import configuredFirebase from '../../../firebase/firebase';

const idbTeams = getDBStore('teams');

export function getCachedOwlTeams() {
  return new Promise((resolve) => {
    resolve(idbTeams.getAll());
  });
}

export function getOwlTeams() {
  return new Promise((resolve) => {
    const db = configuredFirebase.firestore();
    db.collection('teams')
      .orderBy('name')
      .get()
      .then((querySnapshot) => {
        const teams = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          teams.push(data);
          idbTeams.set(data);
        });
        resolve(teams);
      });
  });
}

export function sortTeams(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
