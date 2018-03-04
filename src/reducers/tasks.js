const uuidv1 = require("uuid/v1");
import {
	ADD_TODO, REMOVE_TODO,
	SET_AS_DONE,
	SET_AS_TODO,
	UPDATE_TODO_DETAILS
} from "../actions/types";

function updateTodoWithStatus(todoId, tasks, status) {
  return tasks.map(task => {
    return task.id === todoId ? { ...task, status } : task;
  });
}

function updateTodoDetails(todoId, title, description) {
  return tasks.map(task => {
    return task.id === todoId ? { ...task, title, description } : task;
  });
}

export default function(state = [], action = {}) {
  switch (action.type) {
    case ADD_TODO:
      const id = uuidv1();
      const todo = {
        id: id,
        name: action.payload.name,
        description: "",
        status: "todo"
      };
      return [todo, ...state];

    case UPDATE_TODO_DETAILS:
      return updateTodoDetails(
        action.payload.id,
        action.payload.title,
        action.payload.description
      );

    case REMOVE_TODO:
      return state.filter(task => task.id !== action.payload);

    case SET_AS_DONE:
      return updateTodoWithStatus(action.payload, state, "done");

    case SET_AS_TODO:
      return updateTodoWithStatus(action.payload, state, "todo");

    default:
      return state;
  }
}
