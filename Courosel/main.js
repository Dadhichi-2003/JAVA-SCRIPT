let Button = document.querySelectorAll(".Button");
let answer = document.querySelectorAll(".answer");




Button.forEach((buttons,i) => {

    buttons.addEventListener("click",()=>{
        answer[i].classList.toggle("toggle")
    })

})

