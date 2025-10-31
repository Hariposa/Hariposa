const SENHAS = {
  scienutopia: "pagina2.html",
  saphoria: "pagina3.html",
  hariposa: "pagina4.html",
  crokins: "pagina5.html",
  agata: "pagina6.html",
  camellia: "pagina7.html",
  luz: "luz.html",
  guardiao: "guardiao.html",
  guardião: "guardiao.html",
  praga: "praga.html",
  transformados: "praga.html",
  lua: "lua.html",
  divindade: "divindade.html",
  corrupcao: "corrupcao.html",
  corrupção: "corrupcao.html",
  jornal: "jornal.html",
  mariposa: "mariposa.html",
  telefone: "telefone.html",
  amigo: "ele_esta_mentindo_descubra_a_verdade_na_pagina_inicial.html",
  ephir: "insira_a_senha_aqui.html",
  recomeco: "recomeco.html",
  recomeço: "recomeco.html",
  phal: "phal.html",
  azariah: "azariah.html",
  alzira: "alzira.html",
  cross: "cross.html",
  verdade: "verdade.html",
  coordenadas: "coordenadas.html",
  "-48.1924,-178.4489": "voce_o_encontrou.html", // senha especial
};

// Função pra remover acentos e normalizar texto
function normalizarTexto(texto) {
  const apenasNumerosEPontos = /^[-\d.,\s]+$/;
  if (apenasNumerosEPontos.test(texto)) {
    return texto.trim();
  }

  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const input = document.getElementById("senha");
  const msg = document.getElementById("msg");
  const fadeBox = document.getElementById("fadeBox");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const senhaDigitada = normalizarTexto(input.value);

    if (senhaDigitada in SENHAS) {
      fadeBox.classList.remove("fade-in");
      fadeBox.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = SENHAS[senhaDigitada];
      }, 1500);
    } else {
      msg.textContent = "Senha incorreta — tente novamente.";
      input.value = "";
      input.focus();
      input.style.borderBottomColor = "#ef0000ff";
      setTimeout(() => input.style.borderBottomColor = "", 400);
    }
  });
});
