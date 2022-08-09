// 대입 연산자 = (항상 오른쪽에서 왼쪽 방향)
let c= 10;
let d = 20;
console.log(c); //10
console.log(d); //20

// 사칙 연산자 + - * / 
// 산술 연산자 % (나눗셈의 나머지를 구함) ** (지수 연산자) 

let a = 2;
let b = 4;
console.log(a+b); //6
console.log(a-b); //-2
console.log(a*b); //8
console.log(a/b); //0.5
console.log(a%b); //2
console.log(a**b); //16

// 산술 + 대입 연산자 (같이 쓰기)
a += b; // a = a + b
console.log(a); //6
a -= b; // a = a - b
console.log(a); //2
a *= b; // a = a * b
console.log(a); //8
a /= b; // a = a / b
console.log(a); //2

// 증가 연산자 (++) 감소 연산자 (--)
//a++ ++a

let e = 1;
let f = e++;
console.log(e, f); // 출력 결과 : 2, 1

let g = 1;
let h = ++g;
console.log(g, h); // 출력 결과 : 2, 2

// 관계 연산자 ( 비교 연산자 ) < > <= >= (왼 쪽 기준)
let i = 1;
let j = 2;
console.log(i < j); // true
console.log(i > j); // false
console.log(i <= j); // true
console.log(i >= j); // false

// 동등 연산자 == != (값의 동등여부)
// 일치 연산자 === !== (값과 자료형의 동등여부)
let k = 1;
let l = '1';
console.log(k == l); // true
console.log(k != l); // false
console.log(k === l); // false
console.log(k !== l); // true

// 이진 논리 연산자 && (and : 모두 true) || (or : 하나라도 true)
let m = true;
let n = false;
console.l(m && n); // false
console.l(m || n); // true

//조건부 연산자 ( 삼항 연산자 ) 조건식? true일 경우 : false일 경우
let o = true;
let p =  false;
console.log(o ? 1 : 2); //1
console.log(p ? 1 : 2); //2


