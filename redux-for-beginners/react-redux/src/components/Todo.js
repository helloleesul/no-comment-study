import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function Todo({ text, dispatchDelete, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={dispatchDelete}>삭제</button>
    </li>
  );
}
// store의 dispatch, 현재 컴포넌트의 props를 연결해준다.
// dispatchDelete라는 prop을 만들어줘서 dispatch역할을 수행한다.
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatchDelete: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}
// react-redux의 connect로 store.dispatch 함수를 가져온다.
// 반드시 두번째 인자로 mapDispatchToProps를 넣어준다.
export default connect(null, mapDispatchToProps)(Todo);
