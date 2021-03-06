import React,{useState} from 'react'
import './App.css';

const TodoApp = () => {

    const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id == id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };
    return (
        <div className='todo'>
            <input 
                placeholder='add task here...'
                onChange={handleChange}
                type='text'
                name='text'
            />
            <button className="add-btn" onClick={AddTask}>Add it</button>
            <br />
            {tasklist !==[] ? (
                <ul>
                    {tasklist.map(t => (
                        <li className={t.isCompleted ? "crossText":"listitem"}>
                            {t.value}
                            <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
                        </li>
                    ))}
                </ul>
            ):(null)}
        </div>
    )
}

export default TodoApp
