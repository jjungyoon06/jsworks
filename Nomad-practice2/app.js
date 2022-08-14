const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);

    /*
    빈 칸이면 이름 쓰라고 공지하고 15자 이하로 작성하게 하기
    if(username === ""){
        alert("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long");
    }*/
}
loginButton.addEventListener("click",onLoginBtnClick);