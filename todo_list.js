var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    input.value = "";   
    ul.appendChild(li);  //создание элемента
	
    var doneButton = document.createElement("button");
    doneButton.appendChild(document.createTextNode("Done"));
    li.appendChild(doneButton); 
    doneButton.onclick=underlineParent; //отметить как выполненное,зачеркнуть

    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("remove"));
    li.appendChild(removeButton); 
    removeButton.onclick=removeParent; //delet
    
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();       
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function underlineParent(event){
	event.target.parentNode.classList.toggle("done"); //toggle to done
   
    
}

function removeParent(item){
    item.target.parentNode.remove(); //удаление

}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);