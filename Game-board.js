const board = document.getElementById('game-board');

const letters = [...'AABBCCDDEEFFGGHH']; // 16 cards (8 pairs)
let shuffled = letters.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createCard(letter) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.letter = letter;

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const front = document.createElement('div');
  front.classList.add('card-front');
  front.textContent = '0';

  const back = document.createElement('div');
  back.classList.add('card-back');
  back.textContent = letter;

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  card.addEventListener('click', () => flipCard(card));

  return card;
}

function flipCard(card) {
  if (lockBoard || card === firstCard || card.classList.contains('flipped')) return;

  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.letter === secondCard.dataset.letter;

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', () => flipCard(firstCard));
  secondCard.removeEventListener('click', () => flipCard(secondCard));
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Initialize game
shuffled.forEach(letter => {
  const card = createCard(letter);
  board.appendChild(card);
});
//check for win
function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.value === secondCard.dataset.value) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matchedCount += 1;
  
      if (matchedCount === 16) {
        setTimeout(() => alert("🎉 You Win!"), 200);
      }
    } else {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.textContent = '';
      secondCard.textContent = '';
    }
    flippedCards = [];
  }
  
  function shuffle(array) {
    let currentIndex = array.length, temp, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
//call init function
Infinity();
  }

  //Start the timer
  function StartTimer(){
    time= setInterval(() =>
    time++)
    ;
  }
   