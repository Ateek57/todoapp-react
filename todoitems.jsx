import { MdDelete } from "react-icons/md";
function TodoItem({ todoitems, onRemoveitem }) {
  return (
    <>
      <div className="mt-3">
        {todoitems.map((item, index) => (
          <div key={index} className="flex justify-between p-2 bg-white mb-2">
            <div>{item.name}</div>
            <div>{item.duedate}</div>
            <div className="px-6 py-2 bg-red-700 text-white" onClick={()=>onRemoveitem(item)} ><MdDelete /></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default TodoItem;
