import Container from "./container"
import Todoname from "./todoname"
import AddTodo from "./addtodo"
import TodoItem from "./todoitems"
import { useState } from "react"

function App() {
  
  let initialtodoitems = [{name : "Go to School", duedate: '20/4/2023'},
  {name : "Go to home", duedate: '20/4/2023'},{name : "Drink Water", duedate: '20/4/2023'}
  ]
  const [todoitems, settodoitems] = useState(initialtodoitems)
  function Handletoadditems(todoname,duedate){
    let finalitem = [...todoitems, {name:todoname, duedate:duedate}]
    settodoitems(finalitem)
  }
  function Handletodeleteitem(todoitemname){
    const newitems = todoitems.filter(item => item !== todoitemname)
    settodoitems(newitems)   
    

  }

  return (
    <Container>
      <Todoname></Todoname> 
      <AddTodo onItemclick={Handletoadditems}></AddTodo> 
      <TodoItem onRemoveitem={Handletodeleteitem} todoitems = {todoitems}></TodoItem>

      
    </Container>
  )
}

export default App
