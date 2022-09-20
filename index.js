//Selectors
const inputSection_textBox = document.getElementById('inputSection_textBox');
const inputSection_submitButton = document.getElementById('inputSection_submitButton');
const listSection = document.getElementById('listSection');
const listSection_list = document.getElementById('listSection_list');

//Event Listeners
//listens for submit button click
inputSection_submitButton.addEventListener('click', addTodoEntity);
//listens for any click in 'listSection_list'
listSection_list.addEventListener('click', deleteButtonCheck);

//Functions
//creates and adds new TO-DO entity into TO-DO list
function createNewEntity(textBoxValue){
    //create elements
    const div = document.createElement('div');
    const li = document.createElement('li');
    const button = document.createElement('button')

    //append elements to DOM
    listSection_list.appendChild(div);
    div.appendChild(li);
    div.appendChild(button);

    //manipulate elements
    div.classList.add('listSection_listEntity');
    li.classList.add('listSection_listEntity_text');
    li.innerHTML = textBoxValue;
    button.classList.add('listSection_listEntity_deleteButton');
    button.innerHTML = 'Delete';

    //clears input text
    inputSection_textBox.value = '';
}
//calls TO-DO entity creation if possible
function addTodoEntity(event){
    event.preventDefault();

    //check if there is a value in input field
    if(inputSection_textBox.value.length != 0){
        createNewEntity(inputSection_textBox.value);
    }else{
        alert('Please input your TO-DO');
    }
}

//checks if user clicked TO-DO entity delete button
function deleteButtonCheck(event){
    if(event.target.className == 'listSection_listEntity_deleteButton'){
        deleteTodoEntity(event.target);
    }
}

//deletes TO-DO entity
function deleteTodoEntity(buttonClicked){
    buttonClicked.parentElement.remove();
}