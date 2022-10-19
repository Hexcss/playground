import tasks from "../../apis/tasks";
import { 
    CREATE_TASK, 
    DELETE_TASK,
    EDIT_TASK,
    FETCH_TASKS,
    FETCH_TASK, 
} from "./types";

export const createTask = (formValues) => async(dispatch, getState) => {
    const res = await tasks.post("/tasks", formValues);
    dispatch({ type: CREATE_TASK, payload: res.data})
}

export const fetchTasks = () => async(dispatch) => {
    const res = await tasks.get("/tasks");
    console.log(res);
    dispatch({ type: FETCH_TASKS, payload: res.data });
}

export const fetchTask = (id) => async(dispatch) => {
    const res = await tasks.get(`/tasks/${id}`);
    dispatch({ type: FETCH_TASK, payload: res.data });
}

export const editTask = (id, reminder) => async(dispatch) => {
    const res = await tasks.patch(`/tasks/${id}`, !reminder);
    dispatch({ type: EDIT_TASK, payload: res.data });
}

export const deleteTask = (id) => async(dispatch) => {
    await tasks.delete(`/tasks/${id}`);
    dispatch({ type: DELETE_TASK, payload: id });
}
