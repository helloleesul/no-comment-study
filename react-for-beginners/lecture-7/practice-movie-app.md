# Practice Movie App

## key

- 같은 컴포넌트의 list를 렌더할 때 `key`라는 고유한 값의 prop을 넣어주어야 한다.

## API 불러오기

### Promise 방식

```js
useEffect(() => {
  fetch("URL")
    .then((response) => response.json())
    .then((json) => console.log(json));
}, []); // useEffect의 두번째 인자를 빈배열로 설정해 최초 한번만 렌더한다.
```

### async/await 방식 ✅

```js
const getMovies = async () => {
  const response = await fetch("URL");
  const json = await response.json();
  console.log(json);
};

useEffect(() => {
  getMovies();
}, []); // useEffect의 두번째 인자를 빈배열로 설정해 최초 한번만 렌더한다.
```

## react-router-dom

[공식문서 🔗](https://reactrouter.com/en/6.11.2)

`npm install react-router-dom`

- 설정한 경로로 페이지를 전환하는 것
- router는 URL을 보고있는 컴포넌트이고 URL이 변경되면 router가 우리에게 해당 URL에 맞는 컴포넌트를 보여준다.

> `routes` 폴더 생성 후 경로를 지정해주는 파일들을 관리
> `components` 폴더 생성 후 컴포넌트 파일들을 관리  
> `App.js`에 `router`를 렌더하여 각 경로 `path`와 보여줄 컴포넌트 `element`를 설정

```js
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
</Router>
```

### Link

- 클릭했을 때 해당 `path`로 이동할 수 있는 `Link 컴포넌트`를 제공

```js
<Link to={`/movie/${id}`}>
```

### useParams

- path에서 `"/movie/:id"` id 값를 가리키는 `parameters`를 알려줌

```js
const { id } = useParams();

useEffect(() => {
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  getMovie();
}, [id]);
// id값이 바뀔때마다 영화정보를 변경
```

## Breaking Change

사용하는 툴이 업데이트가 되어 내가 작업한 코드도 최신버전으로 사용하고 싶다면 가끔 코드를 수정해야 하는 경우가 발생한다.

> ✅ React.js는 코드를 깨트리지 않고 새로운 기능을 업데이트하고 추가한다. 예전 버전의 코드를 없애지않고 예전 버전의 코드를 기반으로 업데이트 하기 때문에 Breaking Change가 발생하지 않는다!
