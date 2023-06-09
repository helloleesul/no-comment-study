# STATE

## 컴포넌트

- React element를 함수 내에 담으면 원하는 만큼 재사용이 가능하다.

---

## React JS의 state

- state는 기본적으로 데이터가 저장되는 곳  
  counter와 같은 변화하는 데이터를 state로 만들어보자.

> 먼저 일반적으로 사용했던 방법으로 데이터바인딩을 구현해보고, 리렌더링을 어떻게 해야하는지 이해한 후 리액트에서 사용하는 방법으로 구현해본다.

### understanding-State.html

- 화면을 최초 한 번밖에 렌더링하지 않아서 counter 값의 변화가 바로 바로 그려지지 않음. `ReactDom.render(<Containte />, root)`가 로드되고나서 counter의 초깃값은 0이다. 클릭이벤트 후에 counter는 증가하지만 최초 렌더링 이후에 다시 화면을 그려주지않아서 counter의 변화가 화면에 반영되지 않는다. 새로 그려지게 하려면 `ReactDom.render(<Containte />, root)`를 이벤트 함수마다 마지막에 추가해야하는 번거로움이 생긴다.

### setState.html

- 리렌더링을 일으키기 위해 `React.useState()`를 사용한다. `const [초깃값의 식별자, 변경값의 식별자] = React.useState(초깃값)`를 선언해주고, 이벤트 함수를 만들어 함수 내에 `변경값의 식별자`의 인자로 변경될 값의 식을 넣어준다. 이벤트 함수는 이벤트가 발생할 요소에 어트리뷰트로 설정해준다. `onClick={이벤트 함수명}`  
  state의 사용으로 데이터가 변경될 때마다 브라우저를 처음부터 다시 그리지않고 데이터가 업데이트 되는 부분만 리렌더링해준다.
