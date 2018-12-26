import idb from "idb";

const dbPromise = idb.open("schedule", 1, upgradeDB => {
  debugger;
  const dbStore = upgradeDB.createObjectStore("schedule", {
    keyPath: "year",
    autoIncrement: false
  });
  //  const dbStore = upgradeDB.createObjectStore("schedule");
  dbStore.createIndex("year", "year", { unique: true });
});

const idbschedule = {
  get(key) {
    return dbPromise.then(db => {
      return db
        .transaction("schedule")
        .objectStore("schedule")
        .get(key);
    });
  },
  set(val) {
    return dbPromise.then(db => {
      const tx = db.transaction("schedule", "readwrite");
      tx.objectStore("schedule").put(val);
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction("schedule", "readwrite");
      tx.objectStore("schedule").delete(key);
      return tx.complete;
    });
  },
  clear() {
    return dbPromise.then(db => {
      const tx = db.transaction("schedule", "readwrite");
      tx.objectStore("schedule").clear();
      return tx.complete;
    });
  },
  keys() {
    return dbPromise.then(db => {
      const tx = db.transaction("schedule");
      const keys = [];
      const store = tx.objectStore("schedule");

      // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
      // openKeyCursor isn't supported by Safari, so we fall back
      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });

      return tx.complete.then(() => keys);
    });
  }
};

export function getSchedule(selectedYear, firebase) {
  return new Promise(resolve => {
    // dbPromise.then(db => {
    //   const tx = db.transaction("schedule", "readwrite");
    //   //const cachedSchedule = store.get('schedule');
    //   const firestore = firebase.firestore();
    //   firestore
    //     .collection("schedule")
    //     .doc(selectedYear.toString())
    //     .get()
    //     .then(doc => {
    //       const schedule = doc.data();
    //       //store.add(schedule);
    //       tx.objectStore("schedule").put(schedule, selectedYear);
    //       resolve(schedule);
    //     });
    // });
    const firestore = firebase.firestore();
    firestore
      .collection("schedule")
      .doc(selectedYear.toString())
      .get()
      .then(doc => {
        const schedule = doc.data();
        idbschedule.set(schedule);
        resolve(schedule);
      });
  });
}

export function getCachedSchedule(selectedYear) {
  return new Promise(resolve => {
    dbPromise
      .then(db => {
        const tx = db.transaction("schedule", "readwrite");
        const store = tx.objectStore("schedule");
        return store.get(selectedYear);
      })
      .then(resolve);
  });
}
