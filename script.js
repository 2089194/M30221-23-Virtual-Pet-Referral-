const pet = {
  food: 100,
  sleep: 100,
  cleanliness: 100,
  happiness: 100,
  startTime: new Date(), // Stores the time the pet was created to calculate the survival time
}; // Creates an object 'pet' and stores the pet's attributes which are all initialised to 100


function decreaseAttributes() { // Function to decrease attributes by 1, calculates the happiness of the pet based on the average of the other attributes and update display
  pet.food = Math.max(pet.food - 1, 0);
  pet.sleep = Math.max(pet.sleep - 1, 0);
  pet.cleanliness = Math.max(pet.cleanliness - 1, 0);
  pet.happiness = Math.floor((pet.food + pet.sleep + pet.cleanliness) / 3);

  updateAttributeDisplay();
}

function updateAttributeDisplay() { // Function to update the display of the attributes and is called every time an attribute is changed
  const foodDisplay = document.querySelector('#food-value');
  const sleepDisplay = document.querySelector('#sleep-value');
  const cleanlinessDisplay = document.querySelector('#cleanliness-value');
  const happinessDisplay = document.querySelector('#happiness-value');

  foodDisplay.innerText = `${pet.food}%`;
  sleepDisplay.innerText = `${pet.sleep}%`;
  cleanlinessDisplay.innerText = `${pet.cleanliness}%`;
  happinessDisplay.innerText = `${pet.happiness}%`;
  // Displays the attributes as a percentage
}

setInterval(decreaseAttributes, 1000); // Decrease attributes every second

const feedButton = document.querySelector('#feed-button');
const sleepButton = document.querySelector('#sleep-button');
const cleanButton = document.querySelector('#clean-button');
// Select the buttons and assign them to the respective variables

let clickCounter = 0; // Variable to count the number of clicks on a button


function decreaseAttribute(attribute) { // Function to decrease an attribute by 30 every 5 clicks
  clickCounter++;
  if (clickCounter % 5 === 0) {
    pet[attribute] = Math.max(pet[attribute] - 30, 0);
    updateAttributeDisplay();
  }
}


feedButton.addEventListener('click', () => {
  pet.food = Math.min(pet.food + 10, 100);// Adds an event listener to the feed button that increases the food attribute by a value of 10 when clicked

  decreaseAttribute('food'); // Calls the decreaseAttribute to decrease the food attribute by 30 every 5 clicks

  updateAttributeDisplay();
});


sleepButton.addEventListener('click', () => {
  pet.sleep = Math.min(pet.sleep + 10, 100);// Adds an event listener to the sleep button that increases the sleep attribute by 10 when clicked

  decreaseAttribute('sleep'); // Calls the decreaseAttribute to decrease the sleep attribute by 30 every 5 clicks

  updateAttributeDisplay();
});


cleanButton.addEventListener('click', () => {
  pet.cleanliness = Math.min(pet.cleanliness + 10, 100);// Adds an event listener to the clean button that increases the cleanliness attribute by 10 when clicked

  decreaseAttribute('cleanliness'); // Calls the decreaseAttribute to decrease the cleanliness attribute by 30 every 5 clicks

  updateAttributeDisplay();
});


function checkPetStatus() { // Function to check if any of the attributes are less than or equal to 0; if true the program will stop the attribute interval and display the survival time of the pet
  if (pet.food <= 0 || pet.sleep <= 0 || pet.cleanliness <= 0) {
    clearInterval(attributeInterval); // Stops the attribute interval when any of the attributes are less than or equal to 0
    displaySurvivalTime();
  }
}
function storeSurvivalTime(survivalTime) { // Function to store the survival time locally
  localStorage.setItem('survivalTime', survivalTime);
}

function getSurvivalTime() { // Function to retrieve the stored survival time
  const survivalTime = localStorage.getItem('survivalTime');
  return survivalTime;
}


function displaySurvivalTime() { // Function that calculates the survival time of the pet and displays it to the user
  const currentTime = new Date(); // Gets the current time
  const startTime = pet.startTime; // Gets the time the pet was created
  const survivalTimeInSeconds = Math.floor((currentTime - startTime) / 1000); // Calculates the survival time in seconds

  const minutes = Math.floor(survivalTimeInSeconds / 60); // Calculates the minutes by dividing the survival time in seconds by 60
  const seconds = survivalTimeInSeconds % 60; // Calculates the seconds by getting the remainder of the survival time in seconds divided by 60

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Formats the time to be displayed as mm:ss

  const survivalTimeDisplay = document.querySelector('#survival-time');
  if (survivalTimeDisplay) {
    survivalTimeDisplay.innerText = 'Survival Time: ' + formattedTime; // Displays the survival time to the user as "Survival Time:  mm:ss"
    storeSurvivalTime(formattedTime); // Store the survival time locally
    console.log('Survival Time:', formattedTime); // Logs the survival time to the console
  } else {
    survivalTimeDisplay.innerText = 'Survival Time: N/A'; // If the survival time display is not found this will display "Survival Time: N/A"
    console.log('Survival time not known'); // Logs to the console that the survival time is not known
  }
}

displaySurvivalTime(); // Call the function to calculate and display the survival time

setTimeout(checkPetStatus, 1000); // Call checkPetStatus after a delay to allow displaySurvivalTime to finish calculating the time


const attributeInterval = setInterval(() => { // Creates an interval that calls the decreaseAttributes and checkPetStatus functions every 1,000 miliseconds (1 second)
  decreaseAttributes(); // Calls the decreaseAttributes function to decrease the attributes every second
  checkPetStatus(); // Calls the checkPetStatus function to check if any of the attributes are less than or equal to 0
}, 1000);

module.exports = pet; // Exports the pet object to be used in setup.js
