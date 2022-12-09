/*

first question:

const express=require('express')
const server=express()
data=
    [
        {"id":1, "name": "Sam", "age": 45 },
        { "id":2,"name": "Tom", "age": 34 },
        { "id":3,"name": "Bill", "age": 18 }
      ]

server.get('/',(req,res)=>{
    console.log(req.cookies)
    console.log(req.hostname)
    console.log(req.ip)
    console.log(req.get('Access'))
})

server.get('/data',(req,res)=>{
    res.send(data)
})
server.get('/data/1',(req,res)=>{
    res.send(data[0])
})
server.get('/data/1',(req,res)=>{
    res.send(data[1])
})
server.get('/data/2',(req,res)=>{
    res.send(data[2])
})
server.get('/data/:id',(req,res)=>{
    res.send(data.find(item=>item.id=== +req.params.id))
})



server.listen(3000,()=>{
    console.log('server is started')
})
*/

/*
// second question
const express=require('express')
const server=express()

users=[
    {"id":1,"card":"4456 8975 7854 8983"},
    {"id":2,"card":"46756 8875 7887 6783"},
    {"id":3,"card":"4786 9075 7094 8193"},
    {"id":4,"card":"4456 8975 7854 9083"},
    {"id":5,"card":"6677 8954 5554 8990"}
]
server.get('/',(req,res)=>{
    res.send(users)
})

server.get('/card',(req,res)=>{
    res.json(users)
})

server.get('/user/:id', function (req, res) {
   // res.send(JSON.stringify(users.find((user) => user.id == Number(req.params.id))));
const a=users.find(item=>
    item.id===Number(req.params.id)
)  
if(a){
    res.status(200).json(a)
}
else{
    res.status(404).send('404 not found')
}
});


server.listen(3000,()=>{
    console.log('server is started')
})
*/


//third question
const { query } = require('express')
const express=require('express')
const server=express()
mehsullar=[
    {"ad":"toy","qiymeti":200,"miqdari":"100kq",id:1},
    {"ad":"car","qiymeti":300,"miqdari":"300kq",id:2},
    {"ad":"home","qiymeti":650,"miqdari":"600kq",id:3},
    {"ad":"eggs","qiymeti":230,"miqdari":"550kq",id:4},
    {"ad":"cat","qiymeti":440,"miqdari":"330kq",id:5},
    {"ad":"dove","qiymeti":230,"miqdari":"220kq",id:6},
    {"ad":"knife","qiymeti":560,"miqdari":"990kq",id:7},
    {"ad":"dress","qiymeti":980,"miqdari":"760kq",id:8},
    {"ad":"horse","qiymeti":760,"miqdari":"230kq",id:9},
    {"ad":"dog","qiymeti":420,"miqdari":"670kq",id:10},
]
server.get('/mehsul',(req,res)=>{
    const a=mehsullar.slice(req.query.from,req.query.to)
    if(a){
        res.status(200).json(a)
    }
    else{
        res.status(404).send('404 not found')
    }
})

server.get('/mehsul/:id', function (req, res) {
    
 const a=mehsullar.find(item=>
     item.id===Number(req.params.id)
 )  
 if(a){
     res.status(200).json(a)
 }
 else{
     res.status(404).send('404 not found')
 }
 });


server.listen(3000,()=>{
    console.log('server is started')
})