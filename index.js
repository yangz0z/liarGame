//express 모듈 불러오기
const express = require('express');
const app = express();

app.listen(8080, function(){
  console.log('Listening at 8080');
});

//app.get ('경로', 함수) {}
app.get('/test', function(req, res){ //(요청, 응답)
    res.send('Hello World!');
});

//Html 파일 연결
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/main.html');
});