// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC_OjuLJtoTHyT5x6jNKWmU_l4d1tzt5Y",
    authDomain: "sample-5354a.firebaseapp.com",
    databaseURL: "https://sample-5354a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sample-5354a",
    storageBucket: "sample-5354a.firebasestorage.app",
    messagingSenderId: "768713629561",
    appId: "1:768713629561:web:d4e350763c7485ce8799a8",
    measurementId: "G-WGYE5LRLEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Function to write user data
function writeUserData() {
    let today = new Date();
    let timestamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

    let tempbranch = ref(database, 'temperatures');
    let currentTemp = document.getElementById('userdata');

    push(tempbranch, {
        Temperature: parseInt(currentTemp.value), 
        Time: timestamp
    });
}

