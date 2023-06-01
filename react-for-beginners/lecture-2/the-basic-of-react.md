# THE BASICS OF REACT

- 기술이 고치려고 하는 문제를 이해하면 그 기술을 더 잘 이해하게 된다.
- 뭔가를 배우는데 이것이 어떤 문제를 해결하는지 이해하지 못한다면 그리고 해결하려는 문제를 직접 겪어보지 못한다면 그저 궁금해하고 방법만 암기하는 걸로 끝이 난다.
- **React JS**를 왜 이렇게 쓰는지 이해하기 위해 `바닐라 JS 코드`와 `React JS 코드`를 비교해보자.
- `바닐라 JS 코드`로 먼저 만들어보고 `React JS 코드`로 개선할 수 있는 점들을 알아내보자.

## React JS

React JS는 어플리케이션과 UI를 간단하게 interactive하게 만들어주는 라이브러리.

## React DOM

react-dom은 라이브러리 또는 package로 모든 React element들을 HTML body에 둘 수 있도록 해준다.

> React JS가 어떻게 구현되는지 과정을 알아보는 것이므로 실제론 해당 코드처럼 사용하지 않는다.

## 바닐라 JS vs React JS

**바닐라 JS**  
HTML 요소를 먼저 만들고 👉 그걸 JS로 불러와서 👉 HTML 을 조작하는 식  
**React JS**  
JS에서 요소를 먼저 만들고 👉 HTML에 그려준다  
React JS가 갱신할수있는 HTML을 컨트롤할 수 있다는 뜻

```js
vanillaJS.html;
// 바닐라 JS로 구현한 요소와 이벤트
reactDOM.html;
// React JS와 react-dom으로 구현한 React element생성과 이벤트
index.html;
// react-dom으로 구현한 요소를 babel을 통한 컴파일 과정을 거쳐 JSX문법으로 리팩토링
```
