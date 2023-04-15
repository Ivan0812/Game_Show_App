const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const btnStart = document.getElementsByClassName('btn__reset')[0];
const ul = document.querySelector('ul');
const chosen = document.querySelector('.chosen');
//const buttons = document.querySelectorAll('button');

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
function checkLetter(button) { 
    const letters = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < letters.length; i++) {
         if (letters[i].textContent.toLocaleLowerCase() === button.textContent) { 
            match = letters[i]; 
            match.classList.add('show');   
        }
      } 
      return match;
 }; 

// --- listen for the onscreen keyboard to be clicked ---
qwerty.addEventListener('click', (e) => { 
    if ('BUTTON' === e.target.tagName) {
        e.target.classList.add('chosen');
        e.target.disabled = true;
    }
    const letterFound = checkLetter(e.target);
    let hearts = document.querySelectorAll('.tries img');
    if (letterFound === null) {
        hearts[missed].src = "images/lostHeart.png"; 
        missed ++;
    }
    checkWin();
}
);
// --- check if the game has benn won or lost ---
function  checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    let title = document.querySelector('.title');
    if (letter.length === show.length){
        overlay.classList.add('win');
        title.textContent = 'You won!';
        overlay.style.display = 'flex';
    }
    else if (missed >= 5) {
        overlay.classList.add('lose');
        title.textContent = 'You lost!';
        overlay.style.display = 'flex';
    }
 };

