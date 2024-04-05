let player = {
  name: "arnold",
  chips: 30,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageElement = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let card;
playerEl.textContent = player.name + ": $" + player.chips;
function getRandomCard() {
  let cardValue = Math.floor(Math.random() * 13) + 1;
  if (cardValue === 1) return 11;
  if (cardValue >= 11) {
    return 10;
  }
  return cardValue;
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards.push(firstCard, secondCard);
  isAlive = true;
  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wooho ! you have got a blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageElement.textContent = message;
}

function newCard() {
  if (hasBlackJack !== true && isAlive) {
    card = getRandomCard();
    sum = sum + card;
    cards.push(card);
    renderGame();
  } else {
    alert("You're out of the game");
  }
}
