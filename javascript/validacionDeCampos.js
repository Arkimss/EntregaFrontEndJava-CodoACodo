document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mail = form.mail.value;
    const password = form.password.value;
    // realizar las validaciones
    if (mail.trim() === "" || password.trim() === "") {
      alert("Por favor ingrese el usuario y la contraseña");

    }
    form.password.value = "";
    form.mail.value = "";
  });
});