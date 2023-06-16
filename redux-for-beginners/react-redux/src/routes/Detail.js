import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ todoList }) {
  const todoId = useParams().id;
  const todo = todoList.find((el) => el.id === parseInt(todoId));
  return (
    <div>
      <h1>{todo && todo.text}</h1>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return { todoList: state };
}

export default connect(mapStateToProps)(Detail);
