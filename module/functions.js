function oneReturnNumber () {
  return 1;
};

function twoReturnString () {
  return "1";
};
// 보통 함수 앞에 is가 붙어있다면 return값은 boolean
function isThree() {
  return true;
};
// 하나씩 까볼 순 없다.
// 모듈을 까보기 위해 디버거를 이용하여 본다.
// 함수의 return을 봐야한다.
function fourReturnObject () {
  return {
    a : 1,
    b : "2",
    c : true
  }
};
// C에서는 return void 라고 함 return이 없다.
// 전형적인 행위만 하는 execution function 실행 함수이다.
// return을 필요로 하지 않고 동작만을 위한 함수가 존재.
// 대표적으로 for문
function five() {
  let a = 1 + 1;
};