//체크 박스 속성에 이벤트 처리하기
let check = document.querySelector("#shippinginfo");

//클릭했을 때 이벤트 처리
check.addEventListener("click", checkbox);

//체크박스에 click 이벤트 발생했을 때 함수 호출
let billingname = document.querySelector("#billingname");
let billingtel = document.querySelector("#billingtel");
let billingadd = document.querySelector("#billingadd");

let shippingname = document.querySelector("#shippingname");
let shippingtel = document.querySelector("#shippingtel");
let shippingadd = document.querySelector("#shippingadd");


function checkbox(){
    if(check.checked ==true){ //체크박스에 체크되었다면
        shippingname.value = billingname.value;
        //주문 정보(이름)을 배송 정보(이름)에 대입
        shippingtel.value = billingtel.value;
        shippingadd.value = billingadd.value;
    }else{ //check.checked ==false
        shippingname.value= "";
        shippingtel.value= "";
        shippingadd.value= "";
    }
}
