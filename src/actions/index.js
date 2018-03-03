import {ADD_TODO, SET_AS_DONE, SET_AS_TODO, UPDATE_TODO_DETAILS} from "./types";

export function addTodo(task) {
		return {
				type: ADD_TODO,
				payload: task
		}
}

export function setTaskAsDone(taskId) {
		return {
				type: SET_AS_DONE,
				payload: taskId
		}
}

export function setTaskAsTodo(taskId) {
		return {
				type: SET_AS_TODO,
				payload: taskId
		}
}

export function updateTodoDetails(payload) {
		return {
				type: UPDATE_TODO_DETAILS,
				payload: payload
		}
}
