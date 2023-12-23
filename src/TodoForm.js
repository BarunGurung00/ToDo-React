import { useEffect, useState } from "react";
import ToDos from "./Todotask";
import { MdOutlinePlaylistAdd } from "react-icons/md";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if(input === "" || input === " ")return;

    setTask([
      ...task,
      {
        id: Date.now(),
        currentTask: input,
      },
    ]);
    setInput("");
  };

  //Saving all the tasks in the local storage we can retrieve it even after we refresh the page
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(task));
  }, [task]);

  const deleteTask = (item) => {
    setTask(
      task.filter((taskItem) => {
        return taskItem.id !== item;
      })
    );
  };

  return (
    <form className="form w-96 mt-16">
      <div className="top-bar">
        <h1 className="text-center mb-4 font-bold text-lg h-full">To Do Lists</h1>
        <div className="h-8 w-auto flex gap-4 items-center " >
          <input
            className="rounded-[2px] border-[0.5px] border-gray-600"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter todo task here"
          />
          <MdOutlinePlaylistAdd size="30" className="rounded-sm border-[1px] border-gray-400" type="submit" onClick={addTask}/>
        </div>
      </div>
      <ToDos className="mt-2" tasks={task} onDeleteTask={deleteTask} />
    </form>
  );
}
