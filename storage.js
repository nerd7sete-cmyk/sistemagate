// 🔥 BANCO LOCAL SIMPLES (RAIZ)

const DB = {

  // 👤 USUÁRIO
  salvarUsuario(usuario){
    localStorage.setItem("usuario", JSON.stringify(usuario));
  },

  pegarUsuario(){
    return JSON.parse(localStorage.getItem("usuario"));
  },

  logout(){
    localStorage.removeItem("usuario");
  },

  // 💰 TRANSAÇÕES (PIX)
  salvarTransacao(transacao){

    let lista = JSON.parse(localStorage.getItem("transacoes")) || [];

    lista.push({
      id: Date.now(),
      ...transacao
    });

    localStorage.setItem("transacoes", JSON.stringify(lista));
  },

  pegarTransacoes(){
    return JSON.parse(localStorage.getItem("transacoes")) || [];
  },

  limparTudo(){
    localStorage.clear();
  }

};