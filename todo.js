let toDoArray = [];

function addToDo(){
    const addInput = document.getElementById("add-input");
    const addList = document.getElementById("add-list");
    const addCount = document.getElementById("add-count");

    const addNew = addInput.value.trim();
    if(addNew == ""){
        alert("Please add Task");
        return;
    }
    toDoArray.push(addNew);
    addInput.value = "";
    const addItem = document.createElement("li");
    addItem.textContent = addNew;
    addList.appendChild(addItem);
    addCount.textContent = toDoArray.length;
    console.log("Tasks: ", toDoArray);
}