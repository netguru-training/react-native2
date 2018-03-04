import tasksReducer from '../../src/reducers/tasks';

describe('Todos Reducer', () => {

		it('catches action with unknown type', () => {
				expect(tasksReducer()).toBeInstanceOf(Array);
				expect(tasksReducer()).toEqual([]);
		});
});