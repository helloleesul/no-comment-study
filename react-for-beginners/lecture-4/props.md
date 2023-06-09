# Props

각각의 로직을 갖는 컴포넌트를 만들고 분리된 컴포넌트들을 조립해서 부모자식 관계를 가진다.

> props는 일종의 방식으로 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법이다.

- 자식으로 사용될 컴포넌트의 스타일을 고정시키고 내용만 변경해 여러개로 재사용할 때 활용된다.
- 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 보낸다.

### 자식 컴포넌트의 사용

```
function 자식컴포넌트({ 전달이름 }) {
  return <button>{전달이름}</button>;
}
```

- 자식컴포넌트(`props`)  
  매개변수를 `props`로 설정하면 `{props.전달이름}`로 사용
- 자식컴포넌트(`{전달이름1, 전달이름2}`)  
  매개변수를 `{전달이름1, 전달이름2}`로 설정하면 `{전달이름1}`로 사용

### 부모 컴포넌트의 사용

```
function App() {
  return (
    <div>
      <자식컴포넌트 전달이름="어쩌구" />
      <자식컴포넌트 전달이름="저쩌구" />
    </div>
  );
}
```

- `자식컴포넌트({전달이름: '어쩌구'})` 자식컴포넌트의 인자값이 props 객체가 된다.

# memo

부모컴포넌트의 state를 바꾸는 함수를 만들었고, 부모컴포넌트에서 그 함수를 prop으로 보내면 자식컴포넌트에서 그 함수가 실행된다.

만약 부모컴포넌트의 state가 자식컴포넌트들중 1개에 prop값과 바인딩되었을 경우 부모의 state가 변경되면 prop값이 바인딩되지않은 다른 자식컴포넌트들 모두 리렌더링하게 된다.

- 부모 컴포넌트의 state를 변경하면 당연히 그 자식 컴포넌트들도 Re-render가 일어난다.
- 불필요한 re-render는 React.memo()로 관리할 수 있다.
- 이 경우에는 React.memo()로 prop의 변경이 일어난 부분만 렌더링 시킬 수 있으므로 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포넌트일 때 사용하면 될 듯하다.

> **React.memo()**  
> 컴포넌트가 React.memo()로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.
