// import './App.css';

import { useState } from 'react';
import {useCreateTaskForm} from './hooks/useCreateTaskForm';
import {useTaskList} from './hooks/useTaskList';

function App() {

const [] = useState(false)

const {addNewTask, taskList, changeStatus} = useTaskList()

const { handleSubmit, onChangeInput, inputValue} = useCreateTaskForm({onSubmit: addNewTask});

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={onChangeInput} type="text" />
          <button type='submit'>save</button>
      </form>
      <input type='checkbox'/>

      <ul>
        {
          taskList.map(({status, text}, index) => {
            return <li>
              <input checked={status} type="checkbox" onChange={changeStatus(index, status)} /> {text}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
