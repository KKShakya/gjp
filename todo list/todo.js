let input = document.querySelector(".input-value")
let plusbtn = document.querySelector(".plus")
let input_container = document.querySelector(".input")
let todo = document.querySelector(".todo-container")
let Arr = [];
let idx = 0;






let obj = {};
function addDiv() {
    let input = document.querySelector(".input-value").value //value nikali input me se

    idx++ //id ko update kro

    //arr me object banao;
    Arr.push({
        idx, input
    });

    //todo conatiner ka innerhtml khali kro;
    todo.innerHTML = ""

    // arr me map  kro or sathme apppend kro todo list me
    Arr.map(ele => {
        let AppendHtml = `<main>
        <div class="todo">${ele.input}</div>
        <div>
        <button class="delete" onclick="deleteTodo(${ele.idx})">Delete</button>
        </div>
    </main>`
        todo.innerHTML += AppendHtml;
    });
    console.log(Arr);
}

plusbtn.addEventListener('click', addDiv)


function deleteTodo(idx) {
    // Array me del() function call kiya or filter krdiya idx k basis pe ;
    Arr = del(idx)

    // fir todo innerhtml ko khali kiya;
    todo.innerHTML = ""
    // yaha pe ab todo container khali ho chuka hai;

    console.log(Arr);// ye print hone pe khali conatiner dikhega;

    // fir se map kiya  or khali todo container ko bhar diya;
    Arr.map(ele => {
        let AppendHtml = `<main>
        <div class="todo">${ele.input}</div>
        <div>
        <button class="delete" onclick="deleteTodo(${ele.idx})">Delete</button>
        </div>
    </main>`
        todo.innerHTML += AppendHtml;
    });
}

function del(idx) {

    // check kro filter k liye ki idx value ele.idx se milta hai ya nhi;
    return Arr.filter((ele) => idx != ele.idx)
}