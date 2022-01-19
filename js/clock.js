const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);

}
//1. getClock()이라는 함수 안에
//const date = new Date():현재 날짜랑 시간을 알려주는 함수를 변수설정
//시간,분,초를 get...()함수를 통해 다가져옴
//padstart()힘수를 이용해 String을 원하는 만큼 늘림 *padstart()는 string에서만 작동하기 때문에 숫자를 문자열로 치환
//html에 쓴 h2의 clock의 text를 innertText로 바꿔줌



//백틱`${함수.명령어()}`


getClock();
setInterval(getClock,1000);//setInterval함수는 먼저 실행할 함수를 쓰고 그 뒤에 몇ms만큼 움직이게 할 것인지 작성
//setInterval은 사용자가 정한 시간동안 계속 함수를 나타냄



//padstart() and padend()
//기본 문법 : "string".padstart("길이의 최수 수","나머지 수를 앞쪽에 추가할 문자")
//ex) "1".padstart(2."0") = "02"

//기본 문법 : "string".padend("길이의 최수 수","나머지 수를 뒤쪽에 추가할 문자")
//ex) "1".padstart(2."0") = "20"

