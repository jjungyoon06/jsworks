// 글자색 변경
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color; //변하지않는 현재색상 const
    let newColor; //색상 변경 가능 let
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor  = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


//순서 정리
// element 선정
// event를 listen 해라
// 그 event에 반응해라 (보여주거나 감추거나 색을 바꾸거나~)