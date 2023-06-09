import { Link, useLocation } from "react-router-dom";
import error from "../styles/Error.module.css";

function Error() {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <div className={error.container}>
      <h1>Error</h1>
      <p>{msg ? msg : "잘못된 접근입니다."}</p>
      <Link className={error.nav} to={"/"}>
        go to HOME 👈
      </Link>
    </div>
  );
}

export default Error;
