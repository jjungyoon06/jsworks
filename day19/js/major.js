//select 태그 이름이 폼 이름으로 접근
window.onload = function(){
let selectMenu = document.testform.major;

function displaySelect(){
    //select option속성의 인덱스로 선택
    //let selectedtext = selectmenu.options[selectedindex].innerText;
    //alert(selecttext + "가 선택되었습니다.");

    //id 선택자로 처리 select option 속성의 value로 선택
    let selectedText = document.getElementById("subj").value;
    alert(selectedText + "가 선택되었습니다");
}
}