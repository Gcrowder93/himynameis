// get the element that holds the nametag name
const nameElement = document.getElementById('name');
const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');


const pronounSelect = document.getElementById('pronoun select');


//user clicks on the button
updateButton.addEventListener('click', () => {

    // get the text in the input
    const name = nameInput.value;
    

    // update the name element with the text
    nameElement.textContent = name;
});