# Create React App

리액트 앱을 만드는 최고의 방식  
`npx create-react-app [project-name]`  
`npm start` 개발용 서버 실행  
`npm install prop-types` propTypes 설치

> 📦create-react-app  
>  ┣ 📂node_modules  
>  ┣ 📂public  
>  ┣ 📂src  
>  ┃ ┣ 📜App.js  
>  ┃ ┣ 📜App.module.css  
>  ┃ ┣ 📜Button.js  
>  ┃ ┣ 📜Button.module.css  
>  ┃ ┗ 📜index.js  
>  ┣ 📜.gitignore  
>  ┣ 📜README.md  
>  ┣ 📜package-lock.json  
>  ┗ 📜package.json

## 리액트앱에서 CSS에 관한 선택지

1️⃣ `style.css` 파일 생성 후 `index.js`에 `import` (전역 설정)  
2️⃣ 태그 요소의 prop으로 설정 `style={{ backgroundColor: 'red'}}` (인라인 방식)  
3️⃣ css파일을 분할해서 사용하는 `CSS module` 방식 ✅

## CSS module

- `index.js`에 `import`하여 전역에 설정하지 않고 `컴포넌트파일이름.module.css`과 같은 형식의 css파일을 생성하여 해당 컴포넌트 파일 내에 `import`하여 사용한다.
  > 동일한 class 이름을 다른 파일 내에서도 사용 가능!

```js
// Button.js
import style from "./Button.module.css";

function Button({ text }) {
  return <button className={style.btn}>{text}</button>;
}

//Button.module.css
.btn {
  color: red;
}
```
