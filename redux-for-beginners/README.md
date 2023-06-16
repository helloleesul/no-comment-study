# Redux

> **자바스크립트** 어플리케이션들의 state(상태)를 한 곳에서 관리하는 방법

## Redux 쓰는 이유

1. props의 늪에서 벗어나기위해
2. 용이한 state(상태) 변경 관리를 위해

👉 하위 컴포넌트가 깊어지고 전달하는 컴포넌트가 많아질 수록 props를 추적하거나 유지보수하기 어려워진다. 이런 props drilling을 막고 중앙 데이터 저장소인 Store에서 직접 전달할 수 있다.

---

## 학습 목표

- Redux가 정확히 무슨 문제를 해결하는지 알고 배워보자.
- Rdux가 왜 만들어졌고 사용하면 어떤 점이 좋은지 경험해보자.

## 학습 진행 방법

- Redux없이 어플리케이션을 실행해본다. 그리고 Redux를 이용해보는 방식으로 진행한다.  
  Redux가 어떻게 우리가 만드려는 것을 향상시키려고 하는지를 알아보자.
- 왜 Redux를 사용하는가를 이해하자.

1.  바닐라 자바스크립트를 사용하는 방법으로 Redux 배우기
2.  React를 사용하는 방법으로 Redux 배우기

---

## Vanilla Redux (바닐라 자바스크립트 환경)

```js
// 기본적인 방법으로 데이터 변경
let count = 0;
const updateCount = () => {
  number.innerText = count;
};

function handleAdd() {
  count += 1;
  updateCount();
}
function handleMinus() {
  count -= 1;
  updateCount();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// Redux를 사용하여 데이터 변경
function reducer(state = 0, action) {
  console.log(state, action);
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else return state;
}
const store = createStore(reducer);

store.subscribe(() => (number.innerText = store.getState()));

add.addEventListener("click", () => store.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => store.dispatch({ type: "MINUS" }));
```

---

## Redux-toolkit

react-redux를 사용하면서 반복해서 사용하는 많은 양의 코드들을 지름길처럼 사용하는 패키지
더 적은 양의 코드로 같은 기능을 하게 만들어주는 것
