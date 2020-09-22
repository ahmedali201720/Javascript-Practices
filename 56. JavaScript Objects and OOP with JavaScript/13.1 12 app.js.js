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
window.onload = function () {
    itemInput1.value = "Milk";
    itemInput2.value = 5;
    addItem();
}

function Cart() {}

function Item(name, cost) {
    this.name = name;
    this.cost = cost;
    this.withTax = function () {
        return (this.cost * 1.15).toFixed(2);
    }
    this.shipping = function () {
        return (this.cost * 1.05).toFixed(2);
    }
}

function cartMe(e) {
    console.log(e);
}

function addItem() {
    let tempName = itemInput1.value || "test1";
    let tempValue = itemInput2.value || 1;
    let tempItem = new Item(tempName, tempValue);
    items.push(tempItem);
    console.log(items);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${tempName}</h3>$${tempValue}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener('click', cartMe);
    div.tempName = tempName;
    div.tempValue = tempValue;
    document.body.appendChild(div);
    itemInput1.value = "";
    itemInput2.value = "";
}