var useres=[
    { 
        "name":"John Doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane.png"
    }
]
const btn=document.getElementById("btn");
const btn1=document.getElementById("btn1");

var curid=0;
btn.addEventListener("click", toggleuser);
function toggleuser(){
    curid=(curid+1)%2;;
    document.querySelector("img").src=useres[curid].image;
    document.querySelector("h2").textContent=useres[curid].name;
    document.querySelector("p").textContent=useres[curid].gender;

}
btn1.addEventListener("click",randomuser);
function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        document.querySelector("img").src=data.results[0].picture.large;
        document.querySelector("h2").textContent=data.results[0].name.first+""+data.results[0].name.last;
        document.querySelector("p").textContent=data.results[0].gender;

    })
    .catch(function(err){
        console.log("something error occured"+err);
    });
}
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",myrandomuser);
function myrandomuser(){
    fetch("/api/random-user")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        document.querySelector("img").src=data.image;
        document.querySelector("h2").textContent=data.name;
        document.querySelector("p").textContent=data.gender;

    })
    .catch(function(err){
        console.log("something error occured"+err);
    });
}