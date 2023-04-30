const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color=document.getElementsByClassName('color');

button.addEventListener('click',function(){
    const rand = getRand(colors.length);
    document.body.style.backgroundColor=colors[rand];
    color[0].textContent=colors[rand];
})

function getRand(x){
    return Math.floor(Math.random()*x);
}

