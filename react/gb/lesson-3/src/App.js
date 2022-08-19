import {
  Container,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

import { useCreateTaskForm } from "./hooks/useCreateTaskForm";
import { useTaskList } from "./hooks/useTaskList";
import {
  FILTER_BY_STATUS_ALL,
  FILTER_BY_STATUS_COMPLETED,
  FILTER_BY_STATUS_IN_WORK,
} from "./constants";
import { useFilterByStatus } from "./hooks/useFilterByStatus";
import { useTaskFilteredByStatus } from "./hooks/useTaskFilteredByStatus";
import { useCashTaskList } from "./hooks/useCashTaskList";
// import { useTaskFilteredByStatus } from "./../../../lesson-2/src/hooks/useTaskFilteredByStatus";

function App() {
  const { filterStatus, onChangeStatus } = useFilterByStatus();
  const { addNewTask, taskList, changeStatus, setTaskList } = useTaskList();
  useCashTaskList({ setTaskList, taskList });
  const { handleSubmit, onChangeInput, inputValue } = useCreateTaskForm({
    onSubmit: addNewTask,
  });

  const { filteredList } = useTaskFilteredByStatus({
    list: taskList,
    filterStatus,
  });

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
      maxWidth="sm"
    >
      <Paper
        sx={{
          margin: 2,
          padding: 3,
          height: "80vh",
          width: "67%",
          boxShadow: 2,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            value={inputValue}
            onChange={onChangeInput}
            type="text"
            label="Ввести текст"
            variant="outlined"
            size="small"
          />
          <Button type="submit" variant="contained">
            Добавить
          </Button>
        </form>

        <Select size="small" value={filterStatus} onChange={onChangeStatus}>
          <MenuItem value={FILTER_BY_STATUS_ALL}>Все</MenuItem>
          <MenuItem value={FILTER_BY_STATUS_IN_WORK}>В работе</MenuItem>
          <MenuItem value={FILTER_BY_STATUS_COMPLETED}>Готово</MenuItem>
        </Select>

        <ul>
          {filteredList.map(({ status, text }, index) => {
            return (
              <li>
                <Checkbox
                  checked={status}
                  type="checkbox"
                  onChange={changeStatus(index, status)}
                />{" "}
                {text}
              </li>
            );
          })}
        </ul>
      </Paper>
    </Container>
  );
}

export default App;
