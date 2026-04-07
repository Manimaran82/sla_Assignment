const input =document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{

    if(input.type === "password"){
        input.type ="text"
        input.textContent="hide"
    }
    else{
        input.type ="password"
        input.textContent ="show"
    }
})