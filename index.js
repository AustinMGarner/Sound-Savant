// Array of notes (you can add more notes as needed)
const notes = [
  'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4',
  'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5',
  'A5', 'Bb5', 'B5', 'C6'
];

// Object to store audio files
const noteSounds = notes.map((note) => new Audio(`./src/assets/audio/piano/${note}.mp3`));

// Create a buttons element with a specific text

const singleNoteButton = document.createElement("button");
const doubleNoteButton = document.createElement("button");

singleNoteButton.textContent = "Play a Random Note!";
doubleNoteButton.textContent = "Play 2 Random Notes";

document.body.appendChild(singleNoteButton);
document.body.appendChild(doubleNoteButton);

// Generate a random number
const getRandomNumber = () => Math.floor(Math.random() * notes.length);
const randomNote = notes[getRandomNumber()];

const playRandomNote = (randomNote = notes[getRandomNumber()]) =>
  noteSounds[randomNote].play().catch(console.error)

singleNoteButton.addEventListener("click", playRandomNote);
doubleNoteButton.addEventListener("click", () => {
  playRandomNote();
  playRandomNote();
});

