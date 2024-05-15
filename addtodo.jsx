import { useRef } from "react";
import { MdAddComment } from "react-icons/md";
function AddTodo({onItemclick}) {
    const todoNameelement = useRef();
    const dueDateelement = useRef();
    
     function Handleitem(){
      const todoname = todoNameelement.current.value;
      const duedate = dueDateelement.current.value;
      todoNameelement .current.value = " "
      dueDateelement.current.value = " "
      if (!todoname || !duedate) {
           return;
      }  
      onItemclick(todoname,duedate)


      //  if (!todoname || !duedate) {
      //    return; // Don't add item if either field is empty
      //  }
      //  onItemclick(todoname,duedate)
      //  settodoname(" ")
      //  setduedate(" ")
        


     }



  return (
    <>
      <div className="flex justify-center gap-[25px] ">
        <div>
          <input className="border-[1px] border-black px-2 py-1" ref={todoNameelement} type="text" placeholder="Enter todo here..."  />
        </div>
        <div>
          <input  ref={dueDateelement}  type="date" className="border-[1px] border-black px-2 py-1"      />
        </div>
        <div>
          <button className="px-6 py-2 bg-green-700 text-white" onClick={Handleitem}><MdAddComment /></button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
