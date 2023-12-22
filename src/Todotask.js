import { MdDeleteForever } from "react-icons/md";

export default function TodoList({ tasks, onDeleteTask }) {
    return (
        <ol className="ol flex flex-col gap-y-0.5 mt-1"> {/* Add the gap-y-0.5 class here */}
            {tasks.map((item) => {
                return (
                    <div className="flex border-2 justify-between pl-1 pr-2">
                        <li key={item.id}>{item.currentTask}</li>
                        <button onClick={() => onDeleteTask(item.id)}><MdDeleteForever/></button>
                    </div>
                );
            })}
        </ol>
    );
}
