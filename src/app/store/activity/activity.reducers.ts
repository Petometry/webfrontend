export const initialState: activityState = {
activities: [],
loading: false,
error: ''
};
export const activityReducer = createReducer(
initialState,
on(TodoActions.updateTodo, (state, { todo }) => ({ ...state, todos: state.todos.map(t => t.id === todo.id ? todo : t) })),
);
