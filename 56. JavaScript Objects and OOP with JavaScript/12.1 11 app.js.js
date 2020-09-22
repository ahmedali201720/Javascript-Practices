const output = document.createElement('div');
document.body.appendChild(output);
const output1 = document.createElement('div');
document.body.appendChild(output1);
const itemInput1 = document.createElement('input');
itemInput1.setAttribute('type', 'text');
itemInput1.setAttribute('placeholder', 'item name');
output.appendChild(itemInput1);
const itemInput2 = document.createElement('input');
itemInput2.setAttribute('type', 'number');
itemInput2.setAttribute('placeholder', 'cost');
output.appendChild(itemInput2);
const itemButton = document.createElement('button');
itemButton.textContent = "Add Item";
itemButton.addEventListener('click', addItem);
output.appendChild(itemButton);
const items = [];
const cart = new Cart();

function Cart() {}

function addItem() {}