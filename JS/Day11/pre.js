const input =document.getElementById("name")
const pre =document.getElementById("pre")

input.addEventListener("input",()=>{
    pre.textContent=input.value
})