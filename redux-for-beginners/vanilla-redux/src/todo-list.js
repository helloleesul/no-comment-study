import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return { type: ADD_TODO, text: text };
};
const deleteTodo = (id) => {
  return { type: DELETE_TODO, id: id };
};

function reducer(state = [], action) {
  //   console.log(action.id);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { text: action.text, id: Math.random().toString(36) };
      return [newTodo, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));
store.subscribe(paintTodo);

function paintTodo() {
  const todoList = store.getState();
  ul.innerHTML = "";
  todoList.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.addEventListener("click", dispatchDelete);
    li.id = todo.id;
    li.innerText = todo.text;
    // li.innerText += todo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function dispatchAdd(text) {
  store.dispatch(addTodo(text));
}
function dispatchDelete(e) {
  const id = e.target.parentNode.id;
  store.dispatch(deleteTodo(id));
}

function onSubmit(e) {
  e.preventDefault();
  const todo = input.value;
  if (todo !== "") {
    form.reset();
    dispatchAdd(todo);
  }
}

form.addEventListener("submit", onSubmit);
