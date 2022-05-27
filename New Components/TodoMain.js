import React, { useState } from 'react'
import PendingTodo from './PendingTodo';
import CompletedTodosBtn from './CompletedTodos'

function TodoMain() {

  const [inputData, setInputData] = useState(""); // for adding Todo
  const [todos,setTodos] = useState([]);  // added Todo items to the list
  const [markComplete,setMarkComplete] = useState([]);  // for showing markCompleted Todo items

  // onchang event for input todo data
  const changeText = (event) => {
      setInputData(event.target.value);
  }

  // function for adding todo items to the list
  const addItem = () => {
    if(inputData !== ""){
        setTodos( () => {
          return [...todos, {
            checked : false,
            task : inputData
          }]
        })
    }
    setInputData("")
  }

  // function for setting checkbox true or false upon onChange event of checkbox
  const toggleCheck=(index)=>{
    let arr =[];
    for(let i=0;i<todos.length;i++){
      if(i === index){
        console.log(!todos[i].checked)
        arr.push(
          {
          checked: !todos[i].checked,
          task: todos[i].task
          }
          );
      } else{
        arr.push(todos[i]);
      }
      setTodos(arr);
    } 
   }

  //function for deleting todo item
   const deleteTodo = (index) => {
     let deleteArr = todos.filter( (item,indexing) => {
       return index !== indexing
     } );
     setTodos(deleteArr)
   }

   // function for showing mark Completed Button
   const showMarkCompleted = () => {
    for(let i =0;i<todos.length;i++){
      if(todos[i].checked === true){
        return true;
      }
    }
    return false;
  }
 
  // function for setting data for pending todo's and completed todos
  const setComplete = () => {
    let arr = todos.filter((item)=>{
      return  item.checked === false
     });
     console.log("pending", arr)
     setTodos(arr);

     let markItems = todos.filter((item) => {
       return item.checked !== false
     });
      markItems = markItems.map((item,index) => {
       return (item.task)
     })
     console.log("mark items", markItems)
     setMarkComplete([...markComplete.concat(markItems)])
  }

  return (
    <div>
    {/* jsx for showing todo input field and add Button */}
      <div>    
          <h1>Todo List New</h1> 
          <input type="text" onChange={changeText} value = {inputData} />
          <button onClick={addItem} > + </button>
      </div>

      {/* Jsx for showing Pending Todos */}
      <div>
          <div>
              {todos.length > 0 ? <div>
                <p> Pending Todos</p>
                {todos.map((todo, index) => {
                              return (
                                  <PendingTodo
                                    id={index}
                                    key={index}
                                    text={todo.task}
                                    checked={todo.checked}
                                    deleteTodo = { () => deleteTodo(index) }
                                    toggleCheck = { () => toggleCheck(index)}
                                  />                      
                              );
                            })} </div> : null}

              {/* Jsx for showing Mark complete button */}
            <div>
            {showMarkCompleted() ? <CompletedTodosBtn setComplete={setComplete} />: <></>}
            </div>
          </div>

           {/* Jsx for showing Completed Items */}
         <div>
         {markComplete.length > 0 ? <div >
                        <p>Completed Todos</p> 
                        { markComplete.map((item, index) => {
                            return <p key={index} > {item} </p>
                          })} 
                    </div> : null}
         </div>
      </div>
     
    </div>
  )
}

export default TodoMain