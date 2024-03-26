const eye = document.getElementById("hide");
const password = document.getElementById("Password");

function showPass(icon){
    if(password.type == "password"){
        password.type = "text";
        eye.className = 'bx bx-show';
    }
    else{
        password.type = "password";
        eye.className = 'bx bx-hide';
    }
}
document.getElementById("hide").onclick = function(){
    showPass();
}