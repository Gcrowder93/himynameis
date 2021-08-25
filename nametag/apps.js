// get the element that holds the nametag name
const nameElement = document.getElementById('name');
// get the button
const updateButton = document.getElementById('update-button');
// get the input
const nameInput = document.getElementById('name-inpuit');


//user clicks on the button
updateButton.addEventListener('click', () => {

    // get the text in the input
    const name = nameInput.value;

    // update the name element with the text
    nameElement.textContent = name;
});