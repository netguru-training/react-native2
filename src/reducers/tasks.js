const uuidv1 = require('uuid/v1');

import {ADD_TODO, SET_AS_DONE, SET_AS_TODO} from '../actions/types';

function updateTodoWithStatus(todoId, tasks, status) {
				const task = tasks.find(task => task.id === todoId);
				const taskIndex = tasks.findIndex(task => task.id === todoId);
				const newTask = Object.assign({}, task, {status: status});
				const result = [...tasks];
				result.splice(taskIndex, 1);
				return [
								...result,
								newTask
				];
}

export default function (state = [], action) {
				switch (action.type) {
								case ADD_TODO:
												const id = uuidv1();
												const todo = {
																id: id,
																name: action.payload.name,
																description: action.payload.description,
																status: 'todo'
												};
												return [
																...state,
																todo
												];

								case SET_AS_DONE:
												return updateTodoWithStatus(action.payload, state, 'done');

								case SET_AS_TODO:
												return updateTodoWithStatus(action.payload, state, 'todo');

								default:
												return state;
				}
}