const form =document.getElementById("form");
const input=document.getElementById("input");
const todosUL=document.getElementById("todos");

const todos=JSON.parse(localStorage.getItem("todos"));
if(todos){
    todos.forEach(todo=>{
        addTodo(todo)
    });
}

// let mint=JSON.parse(localStorage.getItem("1"));
// mint.map(item=>{
//     const todoE2=document.createElement("li");
//     todoE2.innerText=item;
//     todos.appendChild(todoE2);
    
// });
// console.log(mint);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    addTodo();
});
function addTodo(todo){
    let todoText=input.value;
console.log(todo)
    if(todo){
        todoText=todo.text;
    }
    

    if(todoText){
        const todoE1=document.createElement("li");
        if(todo && todo.completed){
            todoE1.classList.add("completed");
        }

        todoE1.innerText=todoText;
        
        todoE1.addEventListener("click",()=>{
            todoE1.classList.toggle("completed");
            // todoE1.style.textDecoration="line-through";
            upadteLS();
        });

        todoE1.addEventListener("contextmenu",(e)=>{
            e.preventDefault();
            todoE1.remove();
            upadteLS();
        });

        todosUL.appendChild(todoE1);

        // mint.push(todoText);
        // localStorage.setItem("1",JSON.stringify(mint));
        input.value="";

        upadteLS();
    }
}

function upadteLS(){
    const todosE1=document.querySelectorAll('li');
    const todos=[];

    todosE1.forEach(todosE1=>{
        todos.push({
            text:todosE1.innerText,
            completed: todosE1.classList.contains("completed"),
        });
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}