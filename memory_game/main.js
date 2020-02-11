console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds", 
    cardImage: "images/king-of-diamonds.png"
  }
];

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardThree = cards[3];
cardInPlay.push(cardThree);
console.log("User flipped " + cardThree);

var cardFour = cards[4];
cardInPlay.push(cardFour);
console.log("User flipped " + cardFour);


if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}


var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);
  setTimeout(checkForMatch,150)
  console.log("User flipped " + cards[cardId]);

}

const createBoard = function() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = $('<img>')
    cardElement.attr('src', "images/back.png");
    cardElement.attr('data-id', i);
    cardElement.on('click', flipCard);
    $('#game-board').append(cardElement)
  }
}

createBoard();

var newListItem = document.createElement('img');
