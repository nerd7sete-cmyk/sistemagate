// 🔥 SISTEMA DE SALDO DISPONÍVEL

function atualizarSaldo(){

  let usuario = localStorage.getItem("usuario");

  if(!usuario) return;

  let transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];
  let saques = JSON.parse(localStorage.getItem("saques_operador_"+usuario)) || [];

  // 🔥 SOMA ENTRADAS (VALOR LIQUIDO)
  let entradas = 0;

  transacoes.forEach(t => {
    if(t.operador === usuario && t.status === "aprovado"){
      entradas += Number(t.valor || 0);
    }
  });

  // 🔥 SOMA SAQUES (QUE SAEM DO SALDO)
  let saidas = 0;

  saques.forEach(s => {
    if(s.status !== "falha"){ // tudo que não foi recusado
      saidas += Number(s.valor || 0);
    }
  });

  let saldo = entradas - saidas;

  // 🔥 SALVA PADRÃO (FONTE ÚNICA)
  localStorage.setItem("saldo_disponivel_"+usuario, saldo);

  return saldo;
}

// 🔥 PEGAR SALDO
function getSaldo(){

  let usuario = localStorage.getItem("usuario");

  let saldo = localStorage.getItem("saldo_disponivel_"+usuario);

  return Number(saldo || 0);
}