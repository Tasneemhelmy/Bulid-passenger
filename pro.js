let count=0;
let countEl=document.getElementById("count-el");
function increment(){
    count++;
    countEl.innerText=count;
    console.log(count);
}


function decrement(){
    if(count>0){
        count--;
    }

    countEl.innerText=count;
console.log(count);
}
let previous=document.getElementById("save-el");

function save(){
previous.innerText+=count+" - ";
count=0;
countEl.innerText=count;

}

