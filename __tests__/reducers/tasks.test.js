import tasksReducer from '../../src/reducers/tasks';
import {addTodo, removeTodo, setTaskAsTodo, setTaskAsDone, updateTodoDetails} from "../../src/actions/index";

describe('Todos Reducer', () => {
		let tasks = [];

		beforeEach(() => {
				tasks = [
						{
								id: 1,
								name: 'todo 1',
								description: 'todo 1 description',
								status: 'todo',
						},
						{
								id: 2,
								name: 'todo 2',
								description: 'todo 2 description',
								status: 'done',
						},
						{
								id: 3,
								name: 'todo 3',
								description: 'todo 3 description',
								status: 'todo',
						}
				];
		});

		describe('default action', () => {

				it('is instance of proper class', () => {
						expect(tasksReducer()).toBeInstanceOf(Array);
				});

				it('has the correct value', () => {
						expect(tasksReducer()).toEqual([]);
				});
		});

		describe('ADD_TODO action', () => {
				let action;

				beforeEach(() => {
						const todo = {
								name: 'my new task',
								status: 'todo'
						};
						action = addTodo(todo);
				});

				it('is instance of proper class', () => {
						expect(tasksReducer(tasks, action)).toBeInstanceOf(Array);
				});

				it('has the correct length', () => {
						expect(tasksReducer(tasks, action)).toHaveLength(4);
				});

				it('added todo has instance of proper class', () => {
						const addedTask = tasksReducer(tasks, action)[0];
						expect(addedTask).toBeInstanceOf(Object);
				});

				it('added todo has correct name', () => {
						const addedTask = tasksReducer(tasks, action)[0];
						expect(addedTask.name).toBe('my new task');
				});

				it('added todo has empty description', () => {
						const addedTask = tasksReducer(tasks, action)[0];
						expect(addedTask.description).toBe('');
				});

				it('added todo has correct default status', () => {
						const addedTask = tasksReducer(tasks, action)[0];
						expect(addedTask.status).toBe('todo');
				});
		});

		describe('REMOVE_TODO action', () => {
				let action;

				beforeEach(() => {
						action = removeTodo(1);
				});

				it('has the correct length', () => {
						expect(tasksReducer(tasks, action)).toHaveLength(2)
				});

				it("doesn't contain removed task", () => {
						const removedTodo = tasksReducer(tasks, action).find(task => task.id === 1);
						expect(removedTodo).toBeUndefined();
				});
		});

		describe('SET_AS_TODO action', () => {
				let action;

				beforeEach(() => {
						action = setTaskAsTodo(2);
				});

				it('has the correct status', () => {
						const changedTask = tasksReducer(tasks, action).find(task => task.id === 2);
						expect(changedTask.status).toBe('todo');
				});
		});

		describe('SET_AS_DONE action', () => {
				let action;

				beforeEach(() => {
						action = setTaskAsDone(1);
				});

				it('has the correct status', () => {
						const changedTask = tasksReducer(tasks, action).find(task => task.id === 1);
						expect(changedTask.status).toBe('done');
				});
		});

		describe('UPDATE_TODO_DETAILS action', () => {
				let action;

				beforeEach(() => {
						const updatedTodo = {
								id: 3,
								name: 'new name',
								description: 'new description',
						};

						action = updateTodoDetails(updatedTodo);
				});

				it('has the correct name', () => {
						const changedTask = tasksReducer(tasks, action).find(task => task.id === 3);
						expect(changedTask.name).toBe('new name');
				});

				it('has the correct name', () => {
						const changedTask = tasksReducer(tasks, action).find(task => task.id === 3);
						expect(changedTask.description).toBe('new description');
				});
		});
});