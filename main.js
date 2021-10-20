console.log("to do list");

const body = document.querySelector("body")
const ListTitle = document.createElement("h1")
ListTitle.innerHTML = "Todo List";

body.append(ListTitle);

const ULList = document.createElement('ul')
ULList.id = "myList";
body.append(ULList);

const toDos = ["wake up", "eat breakfast", "code"];


//////////////////////////////
const deleteFun = (e)=>{
   console.log(e.target);
   
}


/////////////////////////////

const renderList = () => {
    ULList.innerHTML = "";
    const p = document.querySelector("#myList")
    for (let index = 0; index < toDos.length; index++) {
        const newItem = document.createElement("li")
        newItem.innerHTML = toDos[index];
        p.append(newItem);

        const del = document.createElement("button")
        del.id = index;
        del.innerText = "delet task"
        del.addEventListener("click",deleteFun)
        p.append(del);
    }
}
renderList()

const input1 = document.createElement("input")
input1.id = "myinput"
body.append(input1);

const button1 = document.createElement("button")
button1.id = "mybutton";
button1.innerText = "add task"
body.append(button1);

const addTask = () => {
    if (input1.value.length) {
        toDos.push(input1.value)
        renderList()
        input1.value = ""
    }
}
button1.addEventListener("click", addTask)

// const deleteListItem = () => {
//     if (index.value.length) {
//         toDos.pop(index.value)
//         renderList()
//     }
// }
// del.addEventListener("Click", deleteListItem)





