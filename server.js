const express=require('express');
const app=express();
const port=process.env.PORT || 8040;
app.use(express.static("frontend"));
app.use(express.json());
var users=[
    {
        "id":1,
        "name":"Giliane",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
        "id":2,
        "name":"Esther",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
        "id":3,
        "name":"Alice",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/69.jpg"
    },
    {
        "id":4,
        "name":"Supritha",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        "id":5,
        "name":"Karthika",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "id":6,
        "name":"Karthik",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/26.jpg"
    },
    {
        "id":7,
        "name":"Chole",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/71.jpg"
    },
    {
        "id":8,
        "name":"Marlene",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/25.jpg"
    },
    {
        "id":9,
        "name":"Marthi",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        "id":10,
        "name":"vlanda",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/93.jpg"
    }
];

function findIndex(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return i;
        }
    }
    return -1;

}
app.get("/api/users",function(req,res){
    return res.json(users);
});
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);
    if(index!==-1){
        return res.json(users[index]);
    }
    return res.status(404).json({error:"User not found"});
});

app.get("/api/random-user",function(req,res){
    if(users.length===0){
        return res.status(404).json({error:"No users available"});
    }
    var randomIndex=Math.floor(Math.random()*users.length);
    return res.json(users[randomIndex]);
});
var nextId=11;
app.post("/api/users",function(req,res){
    var newUser=req.body;
    var tempuser={
        "id": nextId,
        "name": newUser.name,
        "gender": newUser.gender,
        "image": newUser.image
    };
    nextId++;
    users.push(tempuser);
    res.status(201).json({"message": "User added successfully"});
});





app.listen(port,function(){
    console.log("server runing on http://localhost:"+port);
});
