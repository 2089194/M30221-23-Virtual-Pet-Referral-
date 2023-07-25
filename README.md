# Virtual Pet

This is an application that allows users to interact with a virtual pet and keep it alive.

## Description

This is a virtual pet that provides a user interface where users can interact with the virtual pet by feeding it, playing with it, and putting it to sleep. The application responds to user actions and update the pet's status accordingly. If any of the attributes reaches 0 then the pet will die and the amount of time the pet was 'alive' will be shown and saved locally.

## Installation

1. Clone the repository

2. Open the `index.html` file in a web browser.

3. Interact with the virtual pet by clicking on the available buttons to feed or play with it.

## Usage

- To feed the pet, click on the "Feed" button.
- To play with the pet, click on the "Play" button.
- To clean the pet, click on the "Clean" button.
- The pet's status and happiness will be affected by these attributes.

## Customization

You can select which pet you want by clicking the "Change pet" button or change its behaviour modifying the code in the `script.js` file. You can change the pet's image, add new actions, or adjust the pet's needs and behaviour.


## Design and Implementation Rationale

The virtual pet application is built using JavaScript, HTML and CSS. The aim is to provide a simple and intuitive user interface for interacting with the virtual pet.

### Organized and Reusable Code
The code is structured in a way that makes it easy to maintain and add new features. The use of OOP allows for optimal organization and allows for the reuse of code.

### Responding to User Actions
When clicking the buttons for "Feed," "Play," or "Clean," the corresponding attributes will be affected, and the overall happiness level changes depending on how the user meets the needs of the pet.

## Unfinished and Future Work

- Adding additional actions; currently, the application only supports naming, feeding, cleaning, playing with and changing the pet. Future work could involve adding more actions such as additional games, feeding them preferred foods or taking the pet for a walk.

- Enhancing the pet's behavior; improving the pet's behavior by implementing more realistic responses to user actions and introducing a sense of progression or growth for the pet, i.e. aging, pokémon-like evolution.
  
- Multiplayer functionality; the ability for users or the pet itself to interact with other pets on the server

- Add a layer of competion by saving the survival time order to create a highscore board that ranks the longest surviving pets on the server

- The implementation of a database that stores the pet name and its survival time dynamically

- A rewards system of sorts, for example awarding the user for keeping the pet alive for a certain amount of time