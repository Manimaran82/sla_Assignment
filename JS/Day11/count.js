const bt =document.getElementById("btn")
const coun =document.getElementById("count")
let count =0
bt.addEventListener("click",()=>{
    count++
    coun.textContent = "Count: "+count

})