const addButton = document.querySelector('.addButton');
var inputValue = document.querySelector('.input');
const container =  document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
            }
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disable =true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemButton.classList.add('itemButton');

        editButton.innerHTML = "EDIT";
        let editButton = document.createElement('button');
        editButton.classList.add('editButton');


        removeButton.innerHTML = "REMOVE";
        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);


    }
}

new item("xyz");