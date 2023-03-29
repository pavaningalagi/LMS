const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const form = document.getElementById("form");

// form.addEventListener("submit",(event)=>{
// event.preventDefault();

// });

form.onsubmit = (e)=>{
    e.preventDefault();
    // api req verification;
    if(form.email.value && form.password.value){
        console.log(1);
    }
};