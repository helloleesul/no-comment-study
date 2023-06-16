import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store";
import Todo from "../components/Todo";

function Home({ todolist, dispatchAdd }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatchAdd(text);
    setText("");
  }
  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {/* {JSON.stringify(todolist)} */}
        {todolist.map((todo, idx) => (
          //   console.log(todo)
          <Todo key={`todo_${idx}`} {...todo} />
        ))}
      </ul>
    </div>
  );
}
// store의 state, 현재 컴포넌트의 props를 연결해준다.
// todolist라는 prop과 연결해준다.
function mapStateToProps(state, ownProps) {
  return { todolist: state };
}
// store의 dispatch, 현재 컴포넌트의 props를 연결해준다.
// dispatchAdd라는 prop을 만들어줘서 dispatch역할을 수행한다.
function mapDispatchToProps(dispatch, ownProps) {
  return { dispatchAdd: (text) => dispatch(addTodo(text)) };
}
// react-redux의 connect로 store.getState 함수와 store.dispatch 함수를 가져온다
export default connect(mapStateToProps, mapDispatchToProps)(Home);
