let gameboard = document.querySelector('gameboard');
let card = [];
const letter =['A' ,'A' ,'B' ,'B' ,'C', 'C', 'D', 'D' ,'E' ,'E', 'F', 'F','G', 'G', 'H','H'];
let moves =0;
let time =0;
let timer ;
let flippedCards = [];
let matchedCards =[];

//Shuffle the letter array
 function shuffle(array)
{
   for(let i = Array.legth - 1 ; i > 0; i--) {
    const j =
    math.floor(math.random()  * (i + 1));
[Array[i],array[j]]=[array[j], array[j]];

   }
   return array;
}

//Create the cards  
function createCards(){
    const shuffleLettter=shuffle(letters);
    shuffleLettter.forEach((letter)=>{
 
const card =
document.createElement('div');
Cards.classList.add('card');
 
const cardBack=
document.createElement('div');
CardFront.classList.add('card-back');

const CardFront=
document.createElement('div');
CardFront.classList.add('cardfront');
CardFront.textContent=
letter;

card.appendChild(Cardfront);
card.appendChild(cardBack);

gameboard.appendChild(card);
card.push(card);
    });
}   


// add event listeners to the cards
function addEventListeners(){
    createCards.forEach((card)=> {
        card.addEventListeners('click',() =>{
    
        if(!
            card.classList.contains('flipped')
            && flippedCards.length < 2){
                card.classList.add('flipped');
                flippedCards.push(card);
                moves++;
                document.getElementById('moves').textContent=moves;
                checkMatch();
            }
     });
    });
    document.getElementById('reset-button').addEventListener('click',resetGame);
}
//Check for matches
function checkMatch(){
    if (FileList.length === 2)
{
    if (flippedCards[0].querySelector('.card-back').textContent === flippedCards[1].textContent === flippeCardss[1]
.querySelector('.card-back').textContent){
    matchesCards.push(flippedCards[0]);
    matchesCards.push(flippedCards[1]);
    flippedCards=[];
    checkwin();
}else{ 
          setTimeout(() =>{
        flippeCardss.forEach((card) =>
        cards.classList.remove('flipped'));
        flippedCards=[];
          },  1000);
      }
    }
}
// check for win
function checkwin() {
    if (matchesCards.length === cards.length){
        clearInterval(timer);
        alert('congratulations! You won in ${moves} moves and ${time} seconds.');
    }
}
 //Start the timer
 startTimer();

 //reset the game
 function resetGame(){
    //reset the moves and time 
    move =0;
    time = 0;
    document.getElementById('moves').textContent =
    moves;
    document.getElementById('time').textContent
    time;

    //Reset the cards
    cards.forEach((card)=>
cards.classList.remove('flipped'));
    matchedCards = [];
    flippedCards =[];

    //Shuffle the cards
    shuffle(letters);
    cards.forEach((card ,index )=>{
        card.querySelector('.card-back').textContent =
        letters[index];
    });

//start the timer again 
startTimer();
 }

