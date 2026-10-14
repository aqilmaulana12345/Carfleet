```javascript
const DB_NAME = "LoginDB";
const DB_VERSION = 1;
const STORE_NAME = "users";

// Membuka database
export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });

        store.createIndex("username", "username", {
          unique: true,
        });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

// Register user
export const registerUser = async (username, password) => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.add({
      username,
      password,
      createdAt: new Date().toISOString(),
    });

    request.onsuccess = () => {
      resolve(true);
    };

    request.onerror = () => {
      if (request.error.name === "ConstraintError") {
        reject(new Error("Username sudah terdaftar."));
      } else {
        reject(request.error);
      }
    };
  });
};

// Login user
export const loginUser = async (username, password) => {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index("username");

    const request = index.get(username);

    request.onsuccess = () => {
      const user = request.result;

      if (!user) {
        resolve({
          success: false,
          message: "Username tidak ditemukan.",
        });
        return;
      }

      if (user.password !== password) {
        resolve({
          success: false,
          message: "Password salah.",
        });
        return;
      }

      resolve({
        success: true,
        user,
      });
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};
```
