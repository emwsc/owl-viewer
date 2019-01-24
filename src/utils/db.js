import idb from "idb";

// const dbPromise = idb.open("schedule", 1, upgradeDB => {
//   debugger;
//   const dbStore = upgradeDB.createObjectStore("schedule", {
//     keyPath: "year",
//     autoIncrement: false
//   });
//   //  const dbStore = upgradeDB.createObjectStore("schedule");
//   dbStore.createIndex("year", "year", { unique: true });
// });

// const idbschedule = {
//   get(key) {
//     return dbPromise.then(db => {
//       return db
//         .transaction("schedule")
//         .objectStore("schedule")
//         .get(key);
//     });
//   },
//   set(val) {
//     return dbPromise.then(db => {
//       const tx = db.transaction("schedule", "readwrite");
//       tx.objectStore("schedule").put(val);
//       return tx.complete;
//     });
//   },
//   delete(key) {
//     return dbPromise.then(db => {
//       const tx = db.transaction("schedule", "readwrite");
//       tx.objectStore("schedule").delete(key);
//       return tx.complete;
//     });
//   },
//   clear() {
//     return dbPromise.then(db => {
//       const tx = db.transaction("schedule", "readwrite");
//       tx.objectStore("schedule").clear();
//       return tx.complete;
//     });
//   },
//   keys() {
//     return dbPromise.then(db => {
//       const tx = db.transaction("schedule");
//       const keys = [];
//       const store = tx.objectStore("schedule");

//       // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
//       // openKeyCursor isn't supported by Safari, so we fall back
//       (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
//         if (!cursor) return;
//         keys.push(cursor.key);
//         cursor.continue();
//       });

//       return tx.complete.then(() => keys);
//     });
//   }
// };

function initDBStores(storeName, keyName) {
  const dbPromise = idb.open(storeName, 1, upgradeDB => {
    debugger;
    const dbStore = upgradeDB.createObjectStore(storeName, {
      keyPath: keyName,
      autoIncrement: false
    });
    dbStore.createIndex(keyName, keyName, { unique: true });
  });

  const idbStore = {
    getAll(key) {
      return dbPromise.then(db => {
        return db
          .transaction(storeName)
          .objectStore(storeName)
          .getAll();
      });
    },
    get(key) {
      return dbPromise.then(db => {
        return db
          .transaction(storeName)
          .objectStore(storeName)
          .get(key);
      });
    },
    set(val) {
      return dbPromise.then(db => {
        const tx = db.transaction(storeName, "readwrite");
        tx.objectStore(storeName).put(val);
        return tx.complete;
      });
    },
    delete(key) {
      return dbPromise.then(db => {
        const tx = db.transaction(storeName, "readwrite");
        tx.objectStore(storeName).delete(key);
        return tx.complete;
      });
    },
    clear() {
      return dbPromise.then(db => {
        const tx = db.transaction(storeName, "readwrite");
        tx.objectStore(storeName).clear();
        return tx.complete;
      });
    },
    keys() {
      return dbPromise.then(db => {
        const tx = db.transaction(storeName);
        const keys = [];
        const store = tx.objectStore(storeName);
        (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
          if (!cursor) return;
          keys.push(cursor.key);
          cursor.continue();
        });

        return tx.complete.then(() => keys);
      });
    }
  };
  return idbStore;
}

// dbStores.push(initDBStores("schedule", "year"));
// dbStores.push(initDBStores("teams", "id"));

const dbStores = {
  schedule: initDBStores("schedule", "year"),
  teams: initDBStores("teams", "id")
};

export function getDBStore(storeName) {
  return dbStores[storeName];
}
