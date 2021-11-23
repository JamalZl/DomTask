let btn = document.querySelector(".myBtn");
let inputname=document.querySelector("#name")
let error=document.querySelector(".errorname")
let inputsurname=document.querySelector("#surname")
let err=document.querySelector(".errorsurname")
let mail=document.querySelector(".mailerror")
let pw=document.getElementById("#pw")
let pw1=document.getElementById("#pw1")
let pwerror=document.querySelector(".pwerror")
btn.onclick=function(){
    if (inputname.value=="") {
        error.classList.remove("d-none")
    }else{
        error.classList.add("d-none")
    } if (inputsurname.value=="") {
        err.classList.remove("d-none")
    } else{
        err.classList.add("d-none")
    }
    if(!pw.value && !pw1.value){
        pwerror.classList.remove("d-none")
       
    }
    else{
        if(pw.value!=pw1.value){
            pwerror.classList.remove("d-none") 
        }
        else{
            pwerror.classList.add("d-none")
        }
    }
}

