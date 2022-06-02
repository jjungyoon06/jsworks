//큰 사진 선택
let bigpic = document.querySelector("#cup");

//작은 사진들 선택
let smallpics = document.querySelectorAll(".small");

//onclick 이벤트
for(let i = 0; i < smallpics.length; i++){
    // smallpics[i].onclick = showbig;
    smallpics[i].addEventListener("click", showbig);
}

function showbig(){
    //src - 이미지의 경로
    let newpic = this.src; //이벤트가 일어난 대상의 속성값
    bigpic.setAttribute("src", newpic);
}