const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btnStart = document.getElementsByClassName('btn__reset')[0];
const ul = document.querySelector('ul');
const letters = document.querySelectorAll('letter');
//const chosen = document.querySelector('.chosen');
const buttons = document.querySelectorAll('button');

let missed = 0;

btnStart.addEventListener('click', () => {
        overlay.style.display = 'none';
});

const phrases = [
   'Beat around the bush',
   'Hit the sack',
   'On the ball',
   'Under the weather',
   'Break the ice'
];

//  --- return a random phrase from an array! ---
function getRandomPhraseAsArray(arr) {
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase;
};
const  getRandomPhrase = getRandomPhraseAsArray(phrases);
//console.log(getRandomPhraseAsArray(phrases));

// --- adds the letters of a stringvto the display! ---

   
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
         li.textContent = arr[i]; 
      if (li.textContent !== ' '){
         ul.appendChild(li);
         li.className = 'letter';
      }else{
         ul.appendChild(li);
         li.className = 'space';
       } 
     }
 };

//console.log(addPhraseToDisplay(getRandomPhrase));
addPhraseToDisplay(getRandomPhrase);

// --- check if a letter is in a phrase ---
function checkLetter(buttons) {
    let match = null;
    for (let i = 0; i < letters.length; i++) {
         if (buttons.textContent === letters[i].textContent) {
            match = letters[i]; 
            match.classList.add('show'); 
        }else {
            return null;
        }
      }
     return match;  
 };


// --- listen for the onscreen keyboard to be clicked ---
qwerty.addEventListener('click', (e) => { 
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
    }
     checkLetter('button');
});