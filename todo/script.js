let todoArr = [
    {
        id: 1,
        text: "text",

    }, {
        id: 2,
        text: "text",

    }, {
        id: 3,
        text: "text",
    }
]

let counter = 3
function filter(id) {
    // this will return 
    // the new filtered array
    return todoArr
        .filter(todo => todo.id != id);
}
populateArray(todoArr);







function deleteTodo(id) {
    todoArr = filter(id)
    populateArray(todoArr)
}

function add() {
    counter++
    todoArr.push({
        id: counter,
        text: document.querySelector("input").value,
    })
    document.querySelector("input").value = ""
    populateArray(todoArr)
}

function populateArray(todoArr) {
    const container = document.getElementById("todos")
    container.innerHTML = ""
    console.log(container);
    todoArr.map(todo => {
        container.innerHTML += `<div>
            <p>`+ todo.text + todo.id + `</p>
            <button onclick="deleteTodo(${todo.id})" class="mla del-btn">Del</button>
        </div>`
    });
}
