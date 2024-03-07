// const getTodos= async()=> {
//    const todos= await fetch ("https://dummyjson.com/todos")
//     .then((response) => {
//         console.log(response.json());

//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=> console.log("code ran successfully"));
    
// };
const todosContainer= document.getElementById('todos')
const loadingtext= document.getElementById('loadingtext')
const fetchbtn= document.getElementById('fetchbtn');
const getTodos= async() =>{
    loadingtext.style.display="block";
    let todos;
await fetch('https://dummyjson.com/todos')

.then((res) => res.json())
.then((data)=> todos=data.todos);
return todos;

};

const createTodos = async ()=> {
    const todos = await getTodos();
    loadingtext.style.display='none'
    todos?.forEach((item)=> {
    const h4 = document.createElement('h4');
    h4.innerHTML= item?.todo;
    todosContainer.appendChild(h4);
});
};



 fetchbtn.addEventListener('click', () => {
 createTodos();
 });
