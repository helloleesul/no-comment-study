import { createStore } from "redux";
//  store는 data를 넣을 수 있는 장소

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// action은 reducer의 두번째 매개변수이고 reducer에게 state 수정방법을 전달하고 소통하는 방법
// action == store.dispatch
// state == store.getState
function reducer(state = 0, action) {
  //  console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer);
// data를 담고있는 store안에 있는 함수(reducer)의 반환값이 수정되는 data(state)
// console.log(store);

function onChange() {
  number.innerText = store.getState();
}

store.subscribe(onChange);
// subscribe는 store안에 있는 변화를 감지

function handleAdd() {
  store.dispatch({ type: ADD });
}

function handleMinus() {
  store.dispatch({ type: MINUS });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
