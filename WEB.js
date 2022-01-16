const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();//브라우저 기본인 페이지 새로고침을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);//loginform에 class=hidden을 추가해준다 로그인폼 숨김
  const username2 = loginInput.value;//username2라는 것에 logininput의 값을 넣어줌
  localStorage.setItem("username", username2);//username이라는 key에 username2라는 밸류를 넣어줌
  localStorage.setItem(USERNAME_KEY, username2);
  paintGreetings(username2);//정보가 input으로부터 온다
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;//id=greeting에 텍스트로 hello username을 넣고
  greeting.classList.remove(HIDDEN_CLASSNAME);//id = greeting에class=hidden을 삭제하고 텍스트가 나오게함
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);//만약 localstorage에 아무것도 없으면 loginform의 class=hidden을 삭제해서 로그인 폼이 보이게함
  loginForm.addEventListener("submit", onLoginSubmit);//그다음 login을 클릭하면 submit이벤트발생한뒤 onloginsubmit함수가 발생
} else {
  paintGreetings(savedUsername);//seavedusername에 값이 있다면 savedusername이라는 곳에서 username_key를 가져오는 paintgreetings발생
}
//유저가 처음 앱을 열면 html의 hidden때문에 숨겨져있다
//그다음 USERNAME_KEY를 가지고 localStorage확인
//처음에는 localStorage가 비어있기 때문에 savedusername이 null
//loginForm.classList.remove(HIDDEN_CLASSNAME);
//loginForm.addEventListener("submit", onLoginSubmit) 이 둘이 발생
//html class의 hidden을 없애주고 submit시킨뒤 onloginsubmit함수 발생
//로그인 후 새로고침을하면 savedusername에 값이 저장되어있으므로 조건식이 false가됨
//그럼 paintGreetings(savedUsername) 발생
//paintGreetings함수가 input값이 아닌  local storage로부터 정보를 받는다
//id=greeting안에 `Hello ${username}`넣고 hidden함수를 제거함으로써 텍스트가 나오게한다.

    
    
    
    
    
    
   
