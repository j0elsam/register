const form = document.getElementById("Register")

form.addEventListener("submit", (a)=>{
    a.preventDefault()

    let isvalid = true

    const emailRegex = "^[^@]+@[^@]+\.[^@]+$"
    const passRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"





    const username = form.username.value
    const email = form.email.value
    const pass = form.pass.value
    const confpass = form.cpass.value

    if(username.length< 4){

        const namemsg = document.getElementById("war1")
        namemsg.style.display ="block"
        isvalid = false
    }

    if(!email.match(emailRegex)){
        const emailmsg = document.getElementById("war2")
        emailmsg.style.display ="block"
        isvalid = false
    }
    if(!pass.match(passRegex)){
        const passmsg = document.getElementById("war3")
        passmsg.style.display ="block"
        isvalid = false
    }
    if(pass != confpass){
        const conmsg = document.getElementById("war4")
        conmsg.style.display ="block"
        isvalid = false
    }

    if(isvalid){
        
        form.submit()
    }


})

let show = false;
let button = document.getElementById("icon")
button.addEventListener("click",()=>

    {
    show = !show
    document.getElementById("pass").type = show ? "text" : "password";
    button.innerHTML= show ? '<i class="bi bi-eye-slash"></i>': '<i class="bi bi-eye"></i>'

})

let showc = false;
let button1 = document.getElementById("icon1")
button1.addEventListener("click",()=>

    {
    showc = !showc
    document.getElementById("cpass").type = showc ? "text" : "password";
    button1.innerHTML= showc ? '<i class="bi bi-eye-slash"></i>': '<i class="bi bi-eye"></i>'

})
