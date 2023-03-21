import fs from 'fs';
// fs = file systen
let name = "leejaekwon";
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let fileName = year + "-" + month + "-" + day + "-" + name + ".txt";

// 쓰다 파일을 동기방식으로
// 파일을 동기방식으로 만들어줌 .txt .js등 파일 형식 설정 해주자
// writeFileSync(경로, 내용)
function writeFileSyn () {
  fs.writeFileSync("./" + fileName, name);
};
// fs.writeFileSync("./" + fileName, name);
// // 폴더를 동기방식으로 만들어줌
// fs.mkdirSync("newFile");
// // 폴더를 동기방식으로 삭제한다.
// fs.rmdirSync("newFile");
// 파일로부터 데이터 읽기
// const data = fs.readFileSync("2023-3-20-leejaekwon.js", "utf-8");
// console.log(data);

// 폴더을 만들어주는 함수
// function mkdirSync(fileName) {
//   fs.mkdirSync(fileName)
// };
// mkdirSync("asd");
// function mkFile(fileName, extension, Memo) {
//   fs.writeFileSync("./" + fileName + extension, Memo);
// };
// mkFile("firstMemo", ".js" ,"hello");

export default writeFileSyn;