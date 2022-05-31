const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Welcome!!')
})

app.listen(port, () => {
  console.log(`서버 실행중...`)
})

/*
[get]
app.get('/users/:userId', (req, res) => {
// res.json('users')
//   req.params.userId
const user = users.find(user)=>user.id===paresInt(req.params.userId);
res.json(user);
})

//상태코드
구글 이미지 참고
res.status(200).json(user);
-> 개발자도구에서 네트워크 후 새로고침. status 확인하기

if(!user) {
    res.status(404).send('요청한 userId를 찾을 수 없습니다.')
}


[host]
app.post("/users", (req,res)=>{
    const newUser = req.body;

   if (Object.keys(newUser).length === 0) {
       res.status(404).send('user에 관한 정보를 입력해주세요.')
   } else if (Object.keys(newUser).length<4) {
       res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요.')
   }

    users.push{
        id: users[users.length-1].id+1,
        ...newUser
    }

    res.json(users)
})


[put] // 기존에 있던 유저 정보 수정
app.put('/users/:userId', (req, res) => {
    users.findindex(user => user.id === parseInt(req.parms.userId));
    
    users[id]={
        id : users[id].id;
        ...req.body
    }

    res.status(200).json(users);
})

[delete]
app.delete('/users/:userId', (req, res) => {
    const id =users.findIndex(
        (user) => user.id === parseInt(req.parms.userId)
    )

    if(id===-1){
        res.status(404).send('요청한 id를 찾을 수 없습니다.')
    }

    users.splice(id,1);

    res.status(200).json(users);
})

*/