document.getElementById("telForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("telefone").value.trim();
  const numeroLimpo = input.replace(/\D/g, ""); // ← remove tudo que não é número

  if (numeroLimpo === "92740421") {
    msg.textContent = "Número reconhecido! 🎧";
    msg.style.opacity = "1";

    audioContainer.innerHTML = `
      <br>
      <div style="text-align: center; font-family: var(--font); color: var(--green);">
        <div style="background-color: #000; border: 1px solid #00ff66; border-radius: 6px; padding: 16px; display: inline-block;">
          <p style="margin: 0;">
            [Você tenta ligar para ele]<br><br>[...]<br><br>[Mas ninguém atendeu.]
          </p>
        </div>
      </div>
    `;
  } else if (numeroLimpo === "82943512") {
    msg.textContent = "Número reconhecido! 🎧";
    msg.style.opacity = "1";

    audioContainer.innerHTML = `
      <br>
      <div style="text-align: center; font-family: var(--font); color: var(--green);">
        <div style="background-color: #000; border: 1px solid #00ff66; border-radius: 6px; padding: 16px; display: inline-block; text-align: left; max-width: 600px;">
          <p style="margin: 0;">
            [Você tenta ligar para o seu amigo]<br><br>[...]<br><br>[Ele parece não estar disponível]<br><br>[...]<br><br>[Você escuta um "beep!"]<br><br>[...]<br><br>[Mensagem automática da secretária eletrônica]<br><br>
            Ah, oi, aqui é o Phal. Sinto muito por não atender, ando bem ocupado desde que voltei... É tudo tão confuso... Mas, estou me adaptando! Lembra daquela pessoa da qual eu mencionava em nossas ligações? Não reencontrei ele da maneira que eu esperava, mas fico um pouco mais tranquilo em saber que posso visita-lo no local que ele está... Temos muito o que falar ainda. No momento estou ocupado com algumas coisas, exames médicos por exemplo, mas quando tudo voltar aos conformes, entraremos em contato novamente. Obrigada por tudo, amigo. Obrigado por não desistir de mim, por me ajudar... Espero poder te reencontrar em breve para podemos conversar mais! Fique bem. Até mais!<br><br>[Fim da mensagem]
          </p>
        </div>
      </div>
    `;
  } else {
    msg.textContent = "Número não reconhecido.";
    msg.style.opacity = "1";
    audioContainer.innerHTML = "";
  }
});
