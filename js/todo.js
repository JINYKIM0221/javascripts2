const todoform = document.getElementById("todo-form");
const todoinput = todoform.querySelector("#todo-form input");
const todolist = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //내가 만든 todolist를 저장하는 법 : localStorage사용 하지만 localStorage에 array저장 안됨 only 텍스트만 가능


function savetodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//JOSON.stringify는 어떤 코드건 string으로 바꿔준다
}


function deletetodo(event){
    const li = event.target.parentElement;//버튼을 클릭하면 event를 얻고 event는 target을 주는데 target은 버튼이다 parentElement를 이용해 버튼의 부모를 알아낸다(li)
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));//filter의역할 : todo.id가 parseInt(li.id)와 같지 않으면 즉 false면 요소 삭제
    savetodos();
}

//li.id 는 string타입 todo.id는 number타입 타입을 같게 해줘야함
//parselin. : 문자열을 숫자로 바꿔준다



function painttodo(newtodo){
    const li = document.createElement("li");//html body에 li를 추가
    li.id = newtodo.id;//<li id="newtodo.id">
    const span = document.createElement("span");//html body에 span을 추가
    const button = document.createElement("button");//html body에 button을 추가
    button.innerText = "✔";//button text안에 이모지를 넣음 *이모지 단축키 window + :
    button.addEventListener("click",deletetodo);//button에 click이벤트를 넣음
    li.appendChild(span);//li안에 appendchild로 span을 넣음
    li.appendChild(button);//li안에 appendchild로 button을 넣음
    span.innerText = newtodo.Text;//li에 들어간 span text부분에 newtodo(사용자가 입력하는 값)을 넣음
    todolist.appendChild(li);

}




function todosubmit(event){
    event.preventDefault();
    const newtodo = todoinput.value;//newtodo에 todoinput.value를 집어넣음
    
    todoinput.value = "";//이 식과 위 newtodo는 관계가 없다 //todoinput에 값을 사라지게하고
    const newtodoOJ = {
        Text:newtodo,
        id: Date.now(),
     };//text대신 object로 요소를 넣기 위해서 text에는 newtodo의 값 id에는 date.now()로 고유번호 등록

    toDos.push(newtodoOJ);//그 텍스트를 toDos array에 넘겨주고
    painttodo(newtodoOJ);//화면에 todo값을 나타나게하고
    savetodos();//savetodos함수에 저장


}
todoform.addEventListener("submit",todosubmit);//유저가 submit하면




const savedtodos = localStorage.getItem(TODOS_KEY);


if(savedtodos !== null){
    const parsedtodos = JSON.parse(savedtodos);//JSON.parse = 문자열을 JSON으로 바꿈(ARRAY)
    toDos = parsedtodos;

    parsedtodos.forEach(painttodo);//parsedtodos의 각각 item에 대해(함수)를 실행해달라

}

function filter(){

}





//=>화살표 함수로 array.foreach(item)각각 item각각 function에 넣을수있다


//내가 만든 todo리스트는 새로고침하면 브라우저에 저장이 안됨 저장되게 하고 싶음
//그래서 localstorage를 써서 저장시키려고함 하지만 이 함수는 string만 받고 array는 받지 않음
//우리는 array형태로 저장했기 때문에 const toDos = [] localstorage를 쓰기 위해서 string으로 바꿔야함
//그래서 json.stringify를 써서 ["a","b"] -> "["a","b"]" 즉 array자체를 string으로 바꿔줌
//목적은 array기때문에 "["a","b"]"를 array형태로 바꿔오고 싶음



//문제점 array에 저장이 되긴하지만 덮어쓰는 문제가 생김
//이유는 const toDos = []가 항상 비어진 채로 시작하기 때문
//원하는 것은 toDos array가 시작할 때 빈 것이 아닌 localStroage에서 발견되는 이전의 toDo값들로 하고싶다


//문제점 화면에서 array의 요소가 지워지는 것을 봤다 하지만 localstorage에 계속남아있다.
//만약 a라는 값을 입력했을 때 localstorage에서 어떤 것이 지워지는지 알 수 있나? 모른다
//그래서 text대신에 object({id:aaa, text:"A"})로 만드는 방법을 생각해봤다
//