

// document.body.children[1].children[0].href = 'https://www.google.com';

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = "https://www.google.com";

// let anchorElement = document.querySelector('#external-link');
// anchorElement.href = 'https://www.google.com';

// let newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is the new paragraph';
// document.body.appendChild(newParagraph);

// externalLink = document.getElementById('external-link')
// externalLink.remove();

input = document.getElementById('product-name')

input.addEventListener('input', write)

function write(event) {
    // let input = document.querySelector('input')
    // console.log(input.value)
    let text = event.target.value 
    numOfChars = text.length
    document.getElementById('entered').textContent = 60 -numOfChars
    if (60 - numOfChars <= 10) {
        document.getElementById('entered').style.color = 'red'
        document.getElementById('plain-text').style.color = 'red'
    }
    if (numOfChars > 60) {
        event.target.value = text.slice(0, 60); // Truncate the input to 60 characters
        event.preventDefault(); // Prevent further input
        document.getElementById('entered').textContent = 0
    }
    console.log(text)
}