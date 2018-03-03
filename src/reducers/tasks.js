const uuidv1 = require("uuid/v1");

import { ADD_TODO, SET_AS_DONE, SET_AS_TODO } from "../actions/types";

function updateTodoWithStatus(todoId, tasks, status) {
  return tasks.map(task => {
    if (task.id === todoId) return { ...task, status };
    return task;
  });
}

export default function(
  state = [{ id: 0, name: "test" }, { id: 1, name: "bla" }],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      const id = uuidv1();
      const todo = {
        id: id,
        name: action.payload.name,
        description: action.payload.description,
        status: "todo"
      };
      return [...state, todo];

    case SET_AS_DONE:
      return updateTodoWithStatus(action.payload, state, "done");

    case SET_AS_TODO:
      return updateTodoWithStatus(action.payload, state, "todo");

    default:
      return state;
  }
}
