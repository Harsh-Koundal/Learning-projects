const sign = document.getElementById("btn");
 function showSignupMessage(msg) {
        const messageBox = document.getElementById("signupMessage");
        messageBox.textContent = msg;
        messageBox.style.display = "block";
        
        // Optional: auto-hide after 3 seconds
        setTimeout(() => {
            messageBox.style.display = "none";
        }, 3000);
    }
sign.addEventListener("click",()=>{
    showSignupMessage("Your email has been verified!");
})
document.body.addEventListener("keydown",(e)=>{
    showSignupMessage("your email has been verified")
})    