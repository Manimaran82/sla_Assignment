const form =document.getElementById("myform")
const nam =document.getElementById("input")
const output =document.getElementById("out")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const vluae =nam.value
    output.textContent="Hello "+nam
})