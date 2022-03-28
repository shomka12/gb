
import { useCreateTaskForm } from './hooks/useCreateTaskForm';
import { useTaskList } from './hooks/useTaskList';
import { FILTER_BY_STATUS_ALL, FILTER_BY_STATUS_COMPLETED, FILTER_BY_STATUS_IN_WORK } from './constants'
import { useFilterByStatus } from './hooks/useFilterByStatus'
import { useTaskFilteredByStatus } from './hooks/useTaskFilteredByStatus';
import {useCashTaskList} from './hooks/useCashTaskList'

function App() {

const {filterStatus, onChangeStatus} = useFilterByStatus()
const {addNewTask, taskList, changeStatus, setTaskList} = useTaskList()
useCashTaskList({setTaskList, taskList})
const { handleSubmit, onChangeInput, inputValue} = useCreateTaskForm({onSubmit: addNewTask});

const {filteredList} = useTaskFilteredByStatus({list: taskList, filterStatus})

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={onChangeInput} type="text" />
          <button type='submit'>save</button>
      </form>
      <select value={filterStatus} onChange={onChangeStatus}>
        <option value={FILTER_BY_STATUS_ALL}>all</option>
        <option value={FILTER_BY_STATUS_IN_WORK}>in work</option>
        <option value={FILTER_BY_STATUS_COMPLETED}>completed</option>
      </select>

      <ul>
        {
          filteredList.map(({status, text}, index) => {
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
