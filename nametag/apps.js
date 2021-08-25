// get the element that holds the nametag name
const nameElement = document.getElementById('name');
// get the button
const updateButton = document.getElementById('update-button');
// get the input
const nameInput = document.getElementById('name-input');

const pronounSelect = document.getElementById('pronoun select');


const pink = document.getElementById('pink-button');
pinkButton.addEventListener('click', () => {
    
}
const magic = document.getElementById('magic-button');

magicButton.addEventListener('click', () => {
    
}

//user clicks on the button
updateButton.addEventListener('click', () => {

    // get the text in the input
    const name = nameInput.value;
    

    // update the name element with the text
    nameElement.textContent = name;
});