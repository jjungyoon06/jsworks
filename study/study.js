// 자료형 개념 정리

// Number type - 숫자
let n1 = 1234;
let n2 = 5.678; //소수점 

// String type - 문자
let s1 = "hello";
let s2 = 'world';

// Boolean type - 참 거짓
let b1 = true;
let b2 = false;

// Null type - 아무것도 없음
let n = null;

// Undefined type - 정의되지 않음
let u1;
let u2 = undefined;

// Array type - 배열 (숫자, 문자, 불리언, null 모두 가능)
let arr = [1, 2, 3, 4];

// Object type - 객체를 다루기 위한 자료형
let obj = { a: "apple", b: "banana", c: "carrot" };

// 객체 추가 개념

// 값으로 String 타입만을 사용한 객체
let obj1 = { a: "apple", b: "banana", c: "carrot" };

// 값으로 Number 타입만을 사용한 객체
let obj2 = { a: 1, b: 2, c: 3 };

// 값으로 다양한 자료형들을 함께 사용한 객체
let obj3 = { a: "apple", b: 100, c: [1, 2, 3, 4] };

// 값으로 객체를 사용한 객체
let obj4 = { 
        a: { a1: 1, a2: 2},
        b: { b1: 3, b2: 4},
        c: { c1: 5, c2: 6},
};

console.log(obj1['a']);
// 출력결과 : apple
console.log(obj2.a);
// 출력결과 : 1
console.log(obj4.c.c2);
// 출력결과 : 6
