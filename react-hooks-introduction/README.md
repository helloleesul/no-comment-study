# Introducing Hooks

컴포넌트에 접근하는 방법과 함수형 프로그래밍 스타일 안에서 상호작용하는 작은 function들을 만들어보자!

## What are Hooks?

> react의 state machine에 연결하는 기본적인 방법

- 함수형 프로그래밍 스타일이 된다는 뜻
- functional component에서 state를 가질 수 있게 해준다.
- 기존에 쓰던 class component + did mount + render 형식에서 벗어나 function 하나 안에서 모두 사용할 수 있다.

### 기존 방식

```js
class App extends Component {
  state = { count: 0 };
  modify = (n) => {
    this.setState({ count: n });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </>
    );
  }
}
```

### React Hooks 방식

```js
import { useState } from "react";

const App = () => {
  const [potato, kimchi] = useState(0);
  return (
    <>
      {potato}
      <button onClick={() => kimchi(potato + 1)}>Increment</button>
    </>
  );
};
```

## custom hooks

- hooks의 구조와 쉽게 hooks를 만들고 공유할 수 있다.
