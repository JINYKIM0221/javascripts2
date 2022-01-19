
const API_KEY = "cb4504d85bb4580da33c4b2c509b26f2"


function onGeook(position){
    const lat = position.coords.latitude;//position에서 위도 좌표를가져옴
    const lon = position.coords.longitude;//position에서 경도 좌표를 가져옴
    console.log("HERE",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //api를 통해 가져온 현재위치 날씨정보를 넣음
    fetch(url).then((Response) => Response.json()).then((Data) => {
        //fetch:API호출기 를 쓰기 위해선 두 단계를 거쳐야 한다
        //먼저 fetch로 url을 불러온다음 response(응답하다)로 응답하게 되면 응답해온 것을 json()으로 JS에 맞게 데이터를 바꿈
        //그다음 Data를 호출한다.
        const weather= document.querySelector("#weather span:first-child");//html에 있는 id="weather"에있는 span중 맨 처음 것에 추가
        const city = document.querySelector("#weather span:last-child");////html에 있는 id="weather"에있는 span중 맨 마지막 것에 추가
        city.innerText = Data.name;//api 정보에서 name이라는 것을 가져옴
        weather.innerText = `${Data.weather[0].main} / ${Data.main.temp}`;//data내 weather에서 첫번째 요소의 main을 가져옴
        //data내 정보에서 main에 있는 temp를 가져옴
    });
}
function onGeobad(){
    alert("Can't find you.");

}

navigator.geolocation.getCurrentPosition(onGeook,onGeobad);
//navigator.geolocation.getCurrentPosition(성공했을 때 함수,실패시 함수) : 현재있는 위치를 알려준다 