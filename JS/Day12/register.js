document.getElementById("register").addEventListener("submit",(e)=>{
    e.defaultPrevented()
    let name = document.getElementById("name")
    let email =document.getElementById("mail")
    let password =document.getElementById("pass")

 let users ={name:name,email:email,password:password}

 let user =JSON.parse(localStorage.getItem("user") ) || []

users.push(user)
localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully!");

   
    document.getElementById("register").reset();
})