(function(){

  function aplicarTema(doc){

    let tema = localStorage.getItem("tema") || "dark";

    let estilo = doc.getElementById("theme-auto");

    if(!estilo){
      estilo = doc.createElement("style");
      estilo.id = "theme-auto";
      doc.head.appendChild(estilo);
    }

    if(tema === "light"){

      estilo.innerHTML = `
        html, body{
          background:#f5f5f5 !important;
          color:#000 !important;
        }

        *{
          border-color:#ddd !important;
        }

        div, section{
          background:#fff !important;
          color:#000 !important;
        }

        input, textarea{
          background:#fff !important;
          color:#000 !important;
        }

        button{
          background:#000 !important;
          color:#fff !important;
        }
      `;

    } else {
      estilo.innerHTML = "";
    }

  }

  function aplicarTudo(){

    aplicarTema(document);

    // 🔥 AQUI É O SEGREDO
    document.querySelectorAll("iframe").forEach(frame=>{
      try{
        let doc = frame.contentDocument || frame.contentWindow.document;
        if(doc){
          aplicarTema(doc);
        }
      }catch(e){}
    });

  }

  window.alternarTema = function(){
    let atual = localStorage.getItem("tema") || "dark";
    let novo = atual === "dark" ? "light" : "dark";

    localStorage.setItem("tema", novo);
    location.reload();
  };

  // roda sempre
  setInterval(aplicarTudo, 1000);

})();