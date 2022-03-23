function logar() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

  if ((email.value === "admin@admin.com.br") && (senha.value === "admin123")) {
    localStorage.setItem("acesso", true);
    window.location.href = "index.html";
    alert("Usuario autenticado");
  } else {
    alert("Usuario ou senha invalidos!");
  }
}
