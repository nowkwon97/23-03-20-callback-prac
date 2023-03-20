function six(number, append) {
  return number + append;
}
// 알고리즘이 선언 할 때 결정됨
function seven(number, append) {
  return number - append;
}
// 정적으로 함수를 만들어보자.
// 마지막 매개변수는 callback
// 인자(argument)를 전달 받는다.
// 매개변수 자리에 함수가 들어오는 것이 콜백 함수
// 동기 방식
// createServer(function(req, res){})의 작동 방식
function eight(number, append, callback) {
  let a = number + 1;
  let b = append + 2;
  return callback(a, b);
}

function nine(number, append, callback) {
  return callback(number, append);
}

// 알고리즘이 호출 할 때 결정됨
console.log(eight(1, 2, function(a, b) {
  return a + b;
}))

console.log(nine(3, 6, function(a, b) {
  return a * b;
}));

console.log(eight(3, 6, function(a, b) {
  return a / b;
}))