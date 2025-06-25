//write your code here
window.onload = function name() {

    const elements = ["rock", "paper", "scissors", "lizard", "spock"]

    const rules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']

    };
    const getRandomElements = () => {
        let index = Math.floor(Math.random() * elements.length)
        return elements[index]
    }
    const checkElementsGuess = (userGuess) => {
        const actualElement = getRandomElements()

        console.log(`Tu eliges ${userGuess}`);
        console.log(`La maquina elige ${actualElement}`);

        if (userGuess === actualElement) {
            return console.log("Empate");
        }
        if (rules[userGuess].includes(actualElement)) {
            return console.log(`Ganaste!! ${userGuess} vence a ${actualElement}`);
        }
        console.log(`Perdsite... ${actualElement} vence a ${userGuess}`);
    }
    const guess = prompt("Escoge el elemento: rock, paper, scissors, lizard, spock").toLowerCase()
    checkElementsGuess(guess)
}