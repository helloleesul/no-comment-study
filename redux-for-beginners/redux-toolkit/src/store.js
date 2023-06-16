import {
  // createAction,
  // createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// const addTodo = createAction("ADD_TODO");
// const deleteTodo = createAction("DELETE_TODO");

// // console.log(addTodo(), deleteTodo());

// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   },
// });

const todoList = createSlice({
  name: "todoListReducer",
  initialState: [],
  reducers: {
    // add -> action
    addTodo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    // remove -> action
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: todoList.reducer });

export const { addTodo, deleteTodo } = todoList.actions;
export default store;
