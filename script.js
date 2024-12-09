let accordian = document.getElementsByClassName("FAQ_title");
for(let i = 0;i < accordian.length;i++){
    accordian[i].addEventListener("click", function(){
        if (this.childNodes[1].classList.contains("fa-plus")){
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        } else{
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Get Started Button functionality
const getStartedButton = document.querySelector(".primary_button");
getStartedButton.addEventListener("click", function () {
    alert("Welcome to Netflix! Let's get you started.");
    // You can redirect to a sign-up page, for example:
    // window.location.href = "signup.html";
});

// Sign In Button functionality
const signInButton = document.querySelector(".signin_button");
signInButton.addEventListener("click", function () {
    alert("Redirecting to sign-in page...");
    // You can redirect to a sign-in page, for example:
    // window.location.href = "signin.html";
});