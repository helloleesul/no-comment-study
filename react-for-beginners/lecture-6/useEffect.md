# useEffect

## Refresh

state의 값이 변할 때마다 컴포넌트가 렌더링된다.

```js
function App() {
  // 👉 1. 컴포넌트가 실행됨
  // 🔁 4. 컴포넌트가 다시 실행됨
  // 👉 3. counter가 업데이트 됨
  const [counter, setCounter] = useState(0);
  // 👉 2. button을 누르면 onClick()이 실행되고
  const onClick = () => setCounter((val) => val + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Button!</button>
    </div>
  );
}
```

## 특정 코드들을 컴포넌트의 처음 한번만 렌더(실행)되게 하려면?

- 예를 들어 API를 불러오기라는 최초 한번만 실행시키는 기능을 구현한다고 생각해보자. 이런 상황에서 다른 state를 변화시킬 때마다 컴포넌트에 어쩔 수 없이 API를 불필요하게 계속 렌더시킬 수 밖에 없다.

## useEffect function

- 지정한 state의 값이 변화할때마다 실행되는 함수들을 지정할 수 있다.
- 코드의 특정한 부분만이 변화했을 때, 원하는 코드를 실행할 수 있는 방법
- 쉽게 말해서 우리에게 언제 코드를 실행할지 안할지 결정할 수 있는 도구로 쓰인다.  
  `useEffect(() => { 실행할 코드(function) }, [ 지켜보려는 것들(state) ])`  
  👉 리액트는 코드를 지켜보다가 useEffect에 입력된 state에서 변화가 일어났을 때 이를 감지하고 해당 useEffect 실행코드를 일으킨다. `[]` 빈 배열일 경우 최초 한번만 실행된다. (변화를 지켜볼 state가 없기 때문)

```js
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((val) => val + 1);

  console.log("i run all the time.");

  useEffect(() => {
    console.log("CALL THE API...");
    // 👉 최초 한번만 실행됨
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Button!</button>
    </div>
  );
}
```

## cleanup function

**⛔️ 자주 사용하는 기능은 아님**

- 컴포넌트가 언제 생성(create)되고 파괴(destroy)되는지 알 수 있다.
- 컴포넌트가 파괴(destroy)될 때 분석 API를 보내던가 하는 어떤 코드를 추가로 실행할 수 있다.

```js
function Hello() {
  useEffect(() => {
    // 생성될 때 실행되는 코드
    console.log("created :)");
    // 없어질 때 실행되는 코드
    return () => console.log("detroyed :(");
  }, []);
  return <h2>Hello</h2>;
}

function App() {
  const [showing, setShowing] = useState(false);
  // 👉 버튼을 클릭할 때 <Hello /> 컴포넌트가 생성되거나 없어짐
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
```
