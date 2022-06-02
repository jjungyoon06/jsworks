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

//상세 설명 보기/닫기
let open = false;
let view = document.querySelector("#view");
let detail = document.querySelector("#detail");

//이벤트 처리
view.addEventListener("click", function(){
    if(open == false){
        detail.style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        open = true; //true 상태 지속
    }else{
        detail.style.display = "none";
        view.innerHTML = "상세 설명 보기";
        open = false; //false 상태 지속
    }
});