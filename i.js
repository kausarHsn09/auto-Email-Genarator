
var a=document.getElementById("c");
var input=document.getElementById('input1').value;
var reload=document.getElementById('btn');

reload.addEventListener("click",()=>{
    location.reload()
})

for(var i=0;i<10;i++){
    var dstart=Math.floor(Math.random()*10);
    if(input==""){
        d.innerText=""
    }
   else{
     var d=document.createElement('li');
     d.innerText=input+dstart+"@gmail.com"
     a.appendChild(d);
   }
   
 }
 

