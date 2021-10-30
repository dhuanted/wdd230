const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


button.onclick = function() {
    
    let myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "❌";
    list.appendChild(listItem);

    listBtn.onclick = function() {
        list.removeChild(listItem);
    }

    input.focus();

    const inputvalue = () => {
        if (myItem == null || myItem.length == 0 ) {
            alert('The Book and Chapter cannot be empty');
            list.removeChild(listItem);
            return false;
        }
    }

    inputvalue();
}