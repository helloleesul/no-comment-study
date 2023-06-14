import { useEffect, useRef } from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeIn = useFadeIn(1, 3);
  const fadeIn2 = useFadeIn(5, 1);
  return (
    <div className="App">
      <h1 {...fadeIn}>Hello</h1>
      <h2 {...fadeIn2}>World</h2>
    </div>
  );
};

render(<App />, rootElement);

// useFadeIn 한번 실행 후 opacity 리렌더링이 안되어서
// 17.x.x버전에서 작성하던 방식으로 변경 후 에러 해결

// import { render } from "react-dom";
// import App from "./App";
// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

// 사용 참조는 콘텐츠가 변경될 때 알림을 보내지 않는다는 점에 유의하세요.
// .current 프로퍼티를 변경해도 다시 렌더링되지 않습니다.
// React가 DOM 노드에 참조를 붙이거나 뗄 때 일부 코드를 실행하려면
// 콜백 참조를 대신 사용할 수 있습니다.
