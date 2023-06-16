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

## 용어 정리

- store(reducer) :  
  store는 state를 담고있는 저장소
- reducer(state, action) :  
  store안에 있는 reducer함수는 수정되는 state를 반환
  - state : store.getState(), 가지고 있는 state
  - action : store.dispatch(), reducer에게 state 수정방법을 전달하고 소통하는 방법이며 action의 type별로 어떻게 변화시킬지 함수를 선언 할당한다.
- store.subscribe() : store안에 있는 변화를 감지 후 변화한 상태변화를 rendering

---

## Vanilla Redux (바닐라 JS 환경)

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

## React Redux (React 환경)

> react-redux 라이브러리를 사용  
> store.js 파일을 따로 만들어주고 컴포넌트와 연결시켜준다.

action type별로 만든 함수들을 export하여 각각 연결할 컴포넌트를 react-redux의 connect를 이용해 store.subscribe()역할을 만들어준다. (store안에 있는 변화를 감지 후 변화한 상태변화를 rendering)  
mapStateToProps, mapDispatchToProps를 connect의 매개변수로 넘겨주어 각 함수로 선언한다. `connect(mapStateToProps, mapDispatchToProps)`  
`mapStateToProps(state, ownProps)`는 store의 state, 현재 컴포넌트의 props를 연결해준다. 즉 getState()역할을 맡고있고, `mapDispatchToProps(state, ownProps)`는 store의 dispatch, 현재 컴포넌트의 props를 연결해준다. 즉 dispatch()의 역할을 맡는다.

---

## Redux-toolkit

> react-redux를 사용하면서 반복해서 사용하는 많은 양의 코드들을 지름길처럼 사용하는 패키지
> 더 적은 양의 코드로 같은 기능을 하게 만들어주는 것

### createAction

action의 type과 보낼 값(text, id)을 따로 함수로 만들지 않아도 createAction(type)로 지정해주면 알아서 값을 payload라는 프로퍼티로 생성되어 반환이 가능하다.

### createReducer

기존의 reducer는 생성된 store안에 들어가는 함수로 state가 어떻게 변경될지 그리고 변경된 state를 store에게 전달하는 함수이다.  
 reducer의 action매개변수로 switch문법으로 action의 type마다 state를 어떻게 변경할지(또한 state 직접 변경 불가, 복제하여 새로운 state로 사용 필수) 함수를 각각 지정해주었지만 createReducer를 사용해서 action type이름을 함수객체로 만들어 코드를 보다 간결하게 사용할 수 있게되었다. (또한 state 직접 변경 or 복제하여 새로운 state로 사용 가능 -> 결과적으로는 후자의 구현으로 작동된다.)

### createSlice

slice이름을 지정해주고, 초기 state값과
createReducer, createAction를 createSlice안에 한번에 넣어서 캡슐화하여 사용한 다.

### configureStore

여러 개의 createSlice들을 configureStore로 관리할 수 있다.

---

[🔗 redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)
