import { useEffect,useState } from "react";
import Todo from "./components/Todo";
import { getAllToDo,addTodo,updateTodo ,deleteTodo} from "./utils/HandleApi";

function App() {

  const [toDo,setToDo]=useState([])
  const [text,setText]=useState("")
  const [isUpdating,setisUpdating]=useState(false)
  const [todoId,settodoId]=useState("")
  useEffect(()=>{
      getAllToDo(setToDo)
  },[])
  const updateMode=(_id,text)=>{
    setisUpdating(true)
    setText(text)
    settodoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>  
          <div className="top">
            <input type="text" placeholder="Add Todos.." value={text} onChange={(e)=>setText(e.target.value)}></input>
              <div className="add" 
              onClick={isUpdating?()=>
                updateTodo(todoId,text,setToDo,setText,setisUpdating)
              :()=>addTodo(text,setText,setToDo)}>
                {isUpdating?"Update":"Add"}
                </div>
          </div>
          <div className="list">
            {toDo.map((item)=>
              <Todo key={item._id} text={item.text}
              updateMode={()=>updateMode(item._id,item.text)} deleteMode={()=>deleteTodo(item._id,setToDo)} />
            )}
           
            </div>
      </div>
    </div>
  );
}

export default App;
