const form = document.querySelector(".login-form");
form.addEventListener("submit", (ajdar) => {
  ajdar.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log("Email: ", email);
  console.log("Password: ", password);
  form.reset();
});
