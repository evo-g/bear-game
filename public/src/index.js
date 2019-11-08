
const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if(userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
    return userInput
  } else {
    return 'an invalid option'
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0) {
    return 'bear';
  } else if (randomNumber === 1 ) {
    return 'human';
  } else {
    return 'gun'
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It/s a tie'
  }
  if (userChoice === 'human') {
    if (computerChoice === 'bear') {
      return 'You have been mauled by a bear';
    } else {
      return 'You have disarmed a gun';
    }
  }
  if (userChoice === 'bear') {
    if (computerChoice === 'gun') {
      return 'You have been shot by a gun'
    } else {
      return 'You have mauled a human';
    }
  }
  if (userChoice === 'gun') {
    if (computerChoice === 'human') {
      return 'Your gun has been disarmed';
    } else {
      // figure out a way to append images to the results and style the rest of the app
      let bearImg = require('../images/dead-bear.png')
      return 'You shot a bear' && bearImg;
    }
  }
  if (userChoice === 'an invalid option') {
    return 'please enter a vaild option'
  }
};

const playGame = (e) => {
  e.preventDefault();
  let userInput = document.getElementById('userInput').value;
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  document.getElementById('userChoice').innerHTML = `You chose ${userChoice}`;
  document.getElementById('computerChoice').innerHTML = `Computer chose ${computerChoice}`;
  document.getElementById('gameResults').innerHTML = determineWinner(userChoice, computerChoice);
}

document.addEventListener('submit', playGame);

