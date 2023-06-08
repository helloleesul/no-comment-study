import { Link, useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <div>
      <h1>Error</h1>
      <p>{msg ? msg : "잘못된 경로입니다."}</p>
      <Link to={"/"}>HOME</Link>
    </div>
  );
}

export default Error;
