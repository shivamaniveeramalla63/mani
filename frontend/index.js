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

var curid=0;
btn.addEventListener("click", toggleuser);
function toggleuser(){
        curid=(curid+1)%2;;
        document.querySelector("img").src=useres[curid].image;
        document.querySelector("h2").textContent=useres[curid].name;
        document.querySelector("p").textContent=useres[curid].gender;

}