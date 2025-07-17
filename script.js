const submitBtn= document.getElementById("submitBtn");
let nameError =document.getElementById("nameError");
let emailError =document.getElementById("emailError");
let passError=document.getElementById("passError")
let confirmPassError=document.getElementById("confirmPassError")
let cross=document.getElementsByClassName("fa-xmark")


submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()){
        alert("Form submitted");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";

        let errorIds = ["nameError", "emailError", "passError", "confirmPassError"];
        for (let id of errorIds) {
            const errorElement = document.getElementById(id);
            const icon = errorElement.previousElementSibling;

            if (icon) {
                icon.classList.remove("fa-check", "fa-xmark");
            }
            errorElement.innerHTML = "";
        }

        }
    
    });
cross.addEventListener("click",(e)=>{
    e.previousElementSibling.value=""
})
function validateName(){
    let name =document.getElementById("name").value;
    
    if(name.length==0){

        nameError.innerHTML ="Name is required!";
        nameError.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!name.trim().match(/^[A-Za-z]+(\s+[A-Za-z]+)+$/)){
        nameError.innerHTML="Enter full name!";
        nameError.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add("fa-check")
    return true;
}
function validateEmail(){
    let email =document.getElementById("email").value;
    
    if(email.length==0){

        emailError.innerHTML ="E-mail is required!";
        emailError.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!email.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Enter full E-mail!";
        emailError.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add("fa-check")
    return true;
}
function validatePassword(){
    let pass =document.getElementById("password").value;
    
    if(pass.length==0){

        passError.innerHTML ="Password is required!";
        passError.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!pass.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML="Password must contain atleast:<br>1 uppercase letter<br>1 lowercase letter<br>1 digit<br>1 special character";
        passError.previousElementSibling.classList.add("fa-xmark");
        return false;
    }
    passError.innerHTML="";
    passError.previousElementSibling.classList.add("fa-check");
    return true;
}
function validateConfirmPassword(){
    let confirmPass=document.getElementById("confirmPassword").value
    let pass =document.getElementById("password").value;
    if (!(confirmPass==pass)){
        confirmPassError.previousElementSibling.classList.add("fa-xmark");
        confirmPassError.innerHTML="Passwords don't match!"
        return false;
    }
    confirmPassError.previousElementSibling.classList.add("fa-check");
    return true

}
