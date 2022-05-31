//내장 함수
//인코딩(코드화하기), 디코딩(코드화 해제) 함수


//한글은 에러가 발생할 수 있으므로 코드화함.
var encodeStr = "자바스크립트";
console.log(encodeURIComponent(encodeStr));

var decodeStr = encodeURIComponent(encodeStr);
console.log(decodeURIComponent(decodeStr));

//숫자, 무한유한 값 판별
//NaN = Not a Number
var num1 = "숫자";
if(!isNaN(num1)){ //!true - false
    console.log("숫자");
}else{
    console.log("숫자 아님");
}

//자바스크립트 코드 변경 함수
let str1 = "var num7 = 10";
let str2 = "var num8 = 20";

//자바스크립트 코드로 변경 - eval()
eval(str1);
var num7 = 10;
eval(str2);
var num8 = 20;
console.log(num7+num8);

console.log(eval("2*30"));
console.log(eval("2/30"));