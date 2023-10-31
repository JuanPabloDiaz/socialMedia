import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();
console.log(import.meta.env.MODE);
console.log(appwriteConfig.url);
console.log(appwriteConfig.projectId);

// client.setEndpoint(appwriteConfig.url);
// client.setProject(appwriteConfig.projectId);
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject(`65400de75a08e8215625`);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
