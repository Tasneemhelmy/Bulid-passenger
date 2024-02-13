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
let s=previous.innerText;
function save(){
previous.innerText=s+" "+count;
count=0;
countEl.innerText=count;

}
console.log(s);

