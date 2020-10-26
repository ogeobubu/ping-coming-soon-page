const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValid = "@";

  if (email.value === "") {
    error.innerHTML = "Please ensure you input your email!";
    email.style.border = "1px hsl(354, 100%, 66%) solid";
    setTimeout(() => {
      error.innerHTML = "";
      email.style.border = "";
    }, 3000);
    return null;
  }

  if (!email.value.match(emailValid)) {
    error.innerHTML = "Please provide a valid email address!";
    email.style.border = "1px hsl(354, 100%, 66%) solid";
    setTimeout(() => {
      error.innerHTML = "";
      email.style.border = "";
    }, 3000);
    email.value = "";
    return null;
  }
  console.log(email.value);
  email.value = "";
});
