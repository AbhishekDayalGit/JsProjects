const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color=document.getElementsByClassName('color');

button.addEventListener('click',function(){
    
    let hexColor='#';
    for(var i=0;i<6;i++){
        hexColor+=hex[getRand(16)];
    }
    document.body.style.backgroundColor=hexColor;
    color[0].textContent=hexColor;
});

function getRand(x){
    return Math.floor(Math.random()*x);
}