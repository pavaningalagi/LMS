const ip_mailId = document.getElementById("email");
const pass = document.getElementById("password");
const login = document.getElementById("login");
const form = document.getElementById("form");
const url = "http://localhost:8080";


// On Click Login:
form.onsubmit = async (e) => {
  e.preventDefault();
  // api req verification;
  // console.log(1);
  if (password.length <= 5) {
    alert("Password must be at least 5 characters long.");
    return false;
  }
  try {
    let regExp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z]+$";
    // let input;
    if (form.email.value.match(regExp)) {
      let res = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
        }),
        headers: { "content-type": "application/json" },
      });
      res = await res.json();
      const token = res.token;
      localStorage.setItem("token", token);
      console.log(res);
    } else {
      let res = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          name: form.email.value,
          password: form.password.value,
        }),
        headers: { "content-type": "application/json" },
      });
      res = await res.json();
      const token = res.token;
      localStorage.setItem("token", token);
      console.log(res);
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};
