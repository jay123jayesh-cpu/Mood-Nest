/*function saveMood() {
    let mood = document.getElementById("mood").value;
    localStorage.setItem("todayMood", mood);
    alert("Your mood is saved! 😊");
}

function saveJournal() {
    let entry = document.getElementById("journalEntry").value;
    localStorage.setItem("journal", entry);
    alert("Journal saved! ✨");
}
*/
let currentAudio = null;

function playSound(file) {
    // If something is already playing, stop it
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Load and play the new sound
    currentAudio = new Audio(file);
    currentAudio.loop = true; // optional: keep looping for ambience
    currentAudio.play();
}