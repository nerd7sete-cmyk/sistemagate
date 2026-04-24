// 🔐 PROTEÇÃO FORTE

document.addEventListener("DOMContentLoaded", function(){

  let logado = localStorage.getItem("logado");
  let tipo = localStorage.getItem("tipo");

  let permitido = document.body.getAttribute("data-tipo");

  // NÃO LOGADO
  if(!logado){
    window.location.href = "login.html";
    return;
  }

  // TIPO ERRADO
  if(permitido && tipo !== permitido){
    window.location.href = "login.html";
    return;
  }

});