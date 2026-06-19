const names = document.querySelectorAll("input.name");

names.forEach((name)=>{
    name.addEventListener("input", ()=>{
        if (name.validity.patternMismatch) {
            name.setCustomValidity("Name should only have letters!")
        }
        else {
            name.setCustomValidity("");
        }
    })
});

const confirm = document.querySelector("#confirm");

const pass = document.querySelector("#password");

pass.addEventListener("input",(e) =>{
    if (pass.validity.patternMismatch){
        pass.setCustomValidity("Password format not allowed.");
        confirm.disabled = true;
    }
    else{
        pass.setCustomValidity("");
        confirm.disabled = false;
    }
})



confirm.addEventListener("input", (e)=>{
    if (confirm.value != pass.value){
        confirm.setCustomValidity("Password doesn't match!");
    }
    else{
        confirm.setCustomValidity("");
    }
})