window.addEventListener("load", () => {
  const menu = (inputLogin = document.getElementById("inputLogin")),
    inputPassword = document.getElementById("inputPassword"),
    buttonLogin = document.getElementById("buttonLogin");
});
const listUsers = [...users];
buttonLogin.addEventListener("click", () => {
  let login = inputLogin.value;
  let pass = inputPassword.value;
  compareLogin(login, pass);
});

function compareLogin(login, pass) {
  let teste = 0;
  console.log("teste");
  for (userLocal of users) {
    if (login === userLocal.id && pass === userLocal.password) {
      window.location.href = "/orphanages";
      return;
    } else {
      teste = 1;
    }
  }
  if (teste === 1) {
    alert("Login/Senha Inválido");
    inputLogin.value = "";
    inputPassword.value = "";
  }
}
