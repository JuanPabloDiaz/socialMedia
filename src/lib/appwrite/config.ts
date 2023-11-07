import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTIONS_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTIONS_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTIONS_ID,
};

export const client = new Client();
// console.log(import.meta.env.MODE);

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

// console.log(appwriteConfig.url);
// console.log(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
