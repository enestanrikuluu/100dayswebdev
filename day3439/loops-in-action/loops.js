const calculateSumButton = document.getElementById('calculate-sum-button');
calculateSumButton.addEventListener('click', calculateSumAge);

ageInput = document.getElementById('user-number')

function calculateSumAge() {
    let sumTo = ageInput.value;
    let sum = 0;
    for (i=0; i<=sumTo;i++) {
        sum += i;
    }
    let calculatedSum = document.getElementById('calculated-sum')
    calculatedSum.textContent = sum;
    calculatedSum.style.display = 'block'
}


const links = document.querySelectorAll("#highlight-links a");

const highlightButton = document.getElementById('highlight-button');

highlightButton.addEventListener('click', highlightAll);

function highlightAll() {
    for(i of links) {
        i.className = 'highlighted-anchors';
        console.dir(i);
    }
}


diceInput = document.getElementById('user-target-number');
rollDiceButton = document.getElementById('roll-dice');
rollDiceButton.addEventListener('click', genericFunction)

let target = Math.floor((Math.random() * 6)+1);
let numberOfRolls = 0;

function genericFunction() {

    numberOfRolls++;

    let userGuess = diceInput.value

    if (userGuess == target) {

        document.getElementById('output-total-rolls').textContent = numberOfRolls;
        document.getElementById('output-target-number').textContent = target;

    }
}

