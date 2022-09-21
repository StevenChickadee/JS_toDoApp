//Selectors
const inputSection = document.getElementById('inputSection');
const inputSection_textBox = document.getElementById('inputSection_textBox');
const inputSection_submitButton = document.getElementById('inputSection_submitButton');
const listSection = document.getElementById('listSection');

//Event Listeners
//listens for submit button click
inputSection_submitButton.addEventListener('click', addTodoEntity);
//listens for 'Enter' press
inputSection.addEventListener('submit', addTodoEntity);

//Functions
//creates and adds new TO-DO entity into TO-DO list
function createNewEntity(textBoxValue){
    //create elements
    const form = document.createElement('form');
    const input = document.createElement('input');
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    //append elements to DOM
    listSection.appendChild(form);
    form.appendChild(input);
    form.appendChild(editButton);
    form.appendChild(deleteButton);

    //manipulate elements
    form.classList.add('listSection_listEntity');
    input.classList.add('listSection_listEntity_text');
    input.value = textBoxValue;
    input.type = 'text';
    input.readOnly = true;
    editButton.classList.add('listSection_listEntity_editButton');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', editTodoEntity);
    deleteButton.classList.add('listSection_listEntity_deleteButton');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteTodoEntity);

    //clears input text
    inputSection_textBox.value = '';
}

//calls TO-DO entity creation if possible
function addTodoEntity(event){
    event.preventDefault();

    //check if there is a value in input field
    if(inputSection_textBox.value.length != 0){
        createNewEntity(inputSection_textBox.value);
    }
}

//deletes TO-DO entity
function deleteTodoEntity(){
    this.parentElement.remove();
}

//edits TO-DO entity
function editTodoEntity(event){
    event.preventDefault();

    const input = this.previousSibling;


    //check if we are editing or saving
    if(input.readOnly){ //if we want to edit
        this.innerHTML = 'Save';
        
        const originalInputText = input.value;

        input.readOnly = false;
        input.focus();

        //input.addEventListener('blur', submitChange(input, originalInputText));
        
        return;
    }else{              //if we want to save
        this.innerHTML = 'Edit';
        submitChange(input, input.value)
        return;
    }
}

//submit change of TO-DO Entity
function submitChange(input, text){
    input.removeEventListener('blur', submitChange);
    input.value = text;
    input.readOnly = true;
    console.log('change submitted');
}