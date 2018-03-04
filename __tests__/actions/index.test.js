import {addTodo, removeTodo, setTaskAsDone, setTaskAsTodo, updateTodoDetails} from "../../src/actions";
import {ADD_TODO, REMOVE_TODO, SET_AS_DONE, SET_AS_TODO, UPDATE_TODO_DETAILS} from "../../src/actions/types";

describe('actions', () => {
		let todo;

		beforeEach(() => {
				todo = {
						id: 123,
						name: 'my task',
						description: 'description of the task',
						status: 'todo'
				};
		});

		describe('addTodo', () => {
				let action;

				beforeEach(() => {
						action = addTodo(todo);
				});

				it('has the correct type', () => {
						expect(action.type).toBe(ADD_TODO);
				});

				it('has correct payload id', () => {
						expect(action.payload.id).toBe(123);
				});

				it('has correct payload name', () => {
						expect(action.payload.name).toBe('my task');
				});

				it('has correct payload description', () => {
						expect(action.payload.description).toBe('description of the task');
				});

				it('has correct payload status', () => {
						expect(action.payload.status).toBe('todo');
				});
		});

		describe('removeTodo', () => {
				let action;

				beforeEach(() => {
						action = removeTodo(todo.id);
				});

				it('has the correct type', () => {
						expect(action.type).toBe(REMOVE_TODO);
				});

				it('has the correct payload', () => {
						expect(action.payload).toBe(123);
				});
		});

		describe('setTaskAsDone', () => {
				let action;

				beforeEach(() => {
						action = setTaskAsDone(todo.id);
				});

				it('has the correct type', () => {
						expect(action.type).toBe(SET_AS_DONE);
				});

				it('has the correct payload', () => {
						expect(action.payload).toBe(123);
				});
		});

		describe('setTaskAsTodo', () => {
				let action;

				beforeEach(() => {
						action = setTaskAsTodo(todo.id);
				});

				it('has the correct type', () => {
						expect(action.type).toBe(SET_AS_TODO);
				});

				it('has the correct payload', () => {
						expect(action.payload).toBe(123);
				});
		});

		describe('updateTodoDetails', () => {
				let action;

				beforeEach(() => {
						action = updateTodoDetails(todo);
				});

				it('has the correct type', () => {
						expect(action.type).toBe(UPDATE_TODO_DETAILS);
				});

				it('has correct payload id', () => {
						expect(action.payload.id).toBe(123);
				});

				it('has correct payload name', () => {
						expect(action.payload.name).toBe('my task');
				});

				it('has correct payload description', () => {
						expect(action.payload.description).toBe('description of the task');
				});

				it('has correct payload status', () => {
						expect(action.payload.status).toBe('todo');
				});
		});
});