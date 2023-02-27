import axios from 'axios';
const baseUrl="https://tejaswi4183-fullstack-todo-backend.onrender.com"
const getAllToDo=(setToDo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log("data --->",data);
        setToDo(data)
    })
}
const addTodo=(text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then ((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    }).catch((err)=>
    console.log(err)
)



}
const updateTodo=(todoId,text,setToDo,setText,setisUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id:todoId,text})
    .then ((data)=>{
        console.log(data);
        setText("")
        setisUpdating(false)
        getAllToDo(setToDo)
    }).catch((err)=>
            console.log(err)
    )


}
const deleteTodo=(_id,setToDo)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then ((data)=>{
        
        getAllToDo(setToDo)
    }).catch((err)=>
            console.log(err)
    )


}
export {getAllToDo,addTodo,updateTodo,deleteTodo}