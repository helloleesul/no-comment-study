# 업데이트 한 것

## Loading

component/Home 에서 API를 불러오는 코드를 상위 요소인 App 으로 옮겨서
영화를 클릭하고 다시 home 경로로 돌아와도 새로 loading 되지 않게 수정함

## 404페이지

[참고1: stackoverflow](https://stackoverflow.com/questions/72796042/404-page-not-found-not-working-react-router-v6-using-more-than-one-param) [참고2: navigate](https://reactrouter.com/en/main/components/navigate)  
router path에서 404경로를 추가하고 <Error />컴포넌트를 보여줌  
존재하지않는 경로일때 (\*) navigate로 바로 404경로로 이동하게 함

[참고1: usenavigate](https://reactrouter.com/en/main/hooks/use-navigate) [참고2: useNavigate() useLocation()로 파라미터 전달&취득 방법](https://curryyou.tistory.com/477)  
<Detail />컴포넌트에서 movieId params가 api에 존재하지 않거나(해당 API에서는 모든 params값의 status를 ok처리해서 없을때 반환되는 id의 값이 0일때로 조건문해줌 / 숫자일때) try catch구문으로 error일때(syntax 에러 발생일때 / 숫자가 아닌 문자열이 들어가 파싱이 안될때) useNavigate hooks로 404경로로 이동하게 함  
navigate() 함수의 첫번째 인자에 이동할 경로, 두번째 인자의 state 속성에 파라미터를 넣어주어서 <Error />컴포넌트에 보여줄 메세지를 지정

# 해야할 것

- [ ] 현재 디렉토리 새 저장소로 클론하기 [참고1](https://infiduk.github.io/2022/02/09/git.html) [참고2](https://www.lesstif.com/gitbook/git-clone-20776761.html)
- [ ] Detail.js 마주친 에러 기록하기 [참고](https://velog.io/@rgfdds98/debuging-React-Hook-useEffect-has-a-missing-dependency-fetchMovieData.-Either-include-it-or-remove-the-dependency-array)
- [ ] 영화상세정보 컴포넌트에서 로딩될 때 스켈레톤 ui 구현하기
- [ ] 클론한 저장소에서 배포하기
- [ ] 스타일 입히기
