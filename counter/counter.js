let counterEl=document.getElementById("counter");

function decrease(){
    let preVal=counterEl.textContent;
    let updatedVal=parseInt(preVal)-1;
    if (parseInt(updatedVal)<0){
        counterEl.style.color="red";
    }
    else if(parseInt(updatedVal)===0){
        counterEl.style.color="black";
    }
    counterEl.textContent=updatedVal;
}
function increase(){
    let preVal=counterEl.textContent;
    let updatedVal=parseInt(preVal)+1;
    if (parseInt(updatedVal)>0){
        counterEl.style.color="green";
    }
     else if(parseInt(updatedVal)===0){
        counterEl.style.color="black";
    }
    counterEl.textContent=updatedVal;
}
function reset(){
    counterEl.textContent=0;
    counterEl.style.color="black";
}