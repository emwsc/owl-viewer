import idb from "idb";

function initDBStores(storeName, keyName) {
  const dbPromise = idb.open(storeName, 1, upgradeDB => {
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
