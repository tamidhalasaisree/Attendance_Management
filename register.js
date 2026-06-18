const regBtn = document.getElementById('register-button');
//console.log(regBtn); //rectify the error
regBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const confirmPassword=document.getElementById("confirmPassword");
    if(username.value==="" || email.value==="" || password.value==="" || confirmPassword.value===""){
        alert("Please fill all the fields");
        return;
    }
    if(password.value!==confirmPassword.value){
        alert("Passwords do not match");
        return;
    }
    const user={
        name: username.value,
        email: email.value,
        password: password.value
    }
    let users=JSON.parse(localStorage.getItem("users") || "[]")
    users.push(user)   
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    alert("Registration successful")
    window.location.href="login.html"

})