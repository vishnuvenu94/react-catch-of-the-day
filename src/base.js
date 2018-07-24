import Rebase from "re-base";
import firebase from "firebase";

const fireBaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAGZ6YIxfu4FUOv0kExbrFPMOhxhI5NkOU",
    authDomain: "vishnu-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://vishnu-catch-of-the-day.firebaseio.com",
    
});

const base=Rebase.createClass(fireBaseApp.database());

export {fireBaseApp};
export default base;
