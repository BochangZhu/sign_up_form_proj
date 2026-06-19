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



const pass = document.querySelector("#password");
pass.addEventListener("input",(e) =>{
    if (pass.validity.patternMismatch){
        pass.setCustomValidity("Password format not allowed.");
    }
    else {
        pass.setCustomValidity("");
    }
})
