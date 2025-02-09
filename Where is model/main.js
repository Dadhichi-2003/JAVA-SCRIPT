let Button = document.querySelector('.Button');
let container = document.querySelector('.container');
let btn = document.querySelector('.btn');

Button.addEventListener("click",()=>{

    container.style.display = "Block"

});

btn.addEventListener("click",()=>{

    container.style.display = "None"

});

