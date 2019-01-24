import firebase from "firebase";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence();

const configuredFirebase = firebase;

export default configuredFirebase;
