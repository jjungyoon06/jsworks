//함수 선언
function doSomething(add){
   console.log(add);
   const result = add(2,3);
   console.log(result);
}

// 특정 값 전달 (return)
function add(a,b){
    const sum = a + b;
    return sum;
}
//함수 호출
doSomething(add);

const result = add(1,2);
console.log(result);

const addFun = add;
console.log(addFun);
addFun(1,2);