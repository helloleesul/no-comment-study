import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text,
  };
}
function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id,
  };
}

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};
export default store;
