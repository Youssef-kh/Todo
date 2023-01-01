import React , {useState, useEffect} from 'react'
import ITodo from "../const/todo";
import TodoService from "../services/TodoService";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import "./styles.css";

type Props = {
    todo:ITodo,
    todos:ITodo[],
    setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>;
    
}
const SingleTodo = ({todo, todos, setTodos }: Props) => {
    const [localStatus, setLocalStatus] = useState<number>(0)
    const [editMode, setEditMode] = useState(false);
    const [todoText, setTodoText] = useState<string>('');

    useEffect (()=>{
        setLocalStatus(todo.done)
        setTodoText(todo.todo)
    },[])
    const updateStatus = () =>{
        TodoService.updateOne(
            {
                id:todo.id,
                todo:todo.todo,
                done:todo.done === 0 ? 1 : 0 
            }
        )
        setLocalStatus(localStatus === 0 ? 1 : 0 )
    }
    const deleteTodo =  () => {
        TodoService.remove(todo.id)
        setTodos((prev)=> prev.filter((td) => td.id !== todo.id) );
        console.log(todos);
        
    }
  return (
  <form className='todos_single' >

    {editMode ?<span className="todos_single--text" >
        <input style ={{padding:'8px'}} type='text' name="todo" value={todoText} onChange={(event) =>{
            setTodoText(event.target.value)
            TodoService.updateOne(
                {
                    id:todo.id,
                    todo:event.target.value,
                    done:localStatus 
                }
            )
        }}/>
    </span> : 
        <span className="todos_single--text" style = {{textDecoration: localStatus === 1 ? "line-through" : "none"}}>
        {todo.todo}
    </span>}
    
    <div>
        <span className="icon" onClick = {() =>{setEditMode(!editMode)}}>
            <AiFillEdit />
        </span>
        <span className="icon" onClick ={deleteTodo}>
            <AiFillDelete />
        </span>
        <span className="icon" onClick = {updateStatus}>
            <MdDone />
        </span>
    </div>
  </form>
  )
}

export default SingleTodo