import mainPage from './html.js';
import http from 'http';
// req, res -> 인자를 전달받았다는 걸 알 수 있다.
// 동적으로 실행 알고리즘을 짜준다 -> 즉석으로 알고리즘을 짜준다.
// res 는 객체라는 걸 알 수 있다.
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(mainPage);
});

server.listen(2080, function(error) {
  if(error === true) {
    console.error("서버 안 돌아감");
  }else {
    console.log("서버 돌아감");
  }
})