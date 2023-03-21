import makeFile from './file-prac.js';
const mainPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World!!</h1>
  <button id = "button1">파일 만들기</button>
  <script>
  const button = document.getElementById("button1");
  button.addEventListener('click', function() {
    ${makeFile}
  });
  </script>
</body>
</html>`

export default mainPage;