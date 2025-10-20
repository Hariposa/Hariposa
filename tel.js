const fadeBox = document.getElementById("fadeBox");
const msg = document.getElementById("msg");
const audioContainer = document.getElementById("audioContainer");

document.getElementById("telForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("telefone").value.trim();
  const numeroLimpo = input.replace(/-/g, "");

  if (numeroLimpo === "92740421") {
    msg.textContent = "Número reconhecido! 🎧";
    msg.style.opacity = "1";

    audioContainer.innerHTML = `
      <br>
      <div style="text-align: center; font-family: var(--font); color: var(--green);">
        <div style="background-color: #000; border: 1px solid #00ff66; border-radius: 6px; padding: 16px; display: inline-block;">
          <button id="playBtn" style="background: transparent; border: 1px solid #00ff66; color: #00ff66; padding: 6px 12px; font-family: var(--font); border-radius: 4px; cursor: pointer;">▶ Play</button>
          <span id="timeDisplay" style="margin-left: 12px;">00:00 / 00:00</span>
          <br><br>
          <input type="range" id="progressBar" value="0" style="width: 100%; accent-color: #00ff66;" />
        </div>
        <audio id="customAudio" src="midia/audio2.oga"></audio>
      </div>
    `;

    const audio = document.getElementById("customAudio");
    const playBtn = document.getElementById("playBtn");
    const timeDisplay = document.getElementById("timeDisplay");
    const progressBar = document.getElementById("progressBar");

    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸ Pause";
      } else {
        audio.pause();
        playBtn.textContent = "▶ Play";
      }
    });

    audio.addEventListener("timeupdate", () => {
      const current = formatTime(audio.currentTime);
      const total = formatTime(audio.duration);
      timeDisplay.textContent = `${current} / ${total}`;
      progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    });

    progressBar.addEventListener("input", () => {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }
  } else if (numeroLimpo === "82943512") {
    msg.textContent = "";
    audioContainer.innerHTML = "";
    iniciarDialogo();
  } else {
    msg.textContent = "Número não reconhecido.";
    msg.style.opacity = "1";
    audioContainer.innerHTML = "";
  }
});

function mostrarTextoDigitado(texto, callback) {
  fadeBox.classList.remove("fade-in");
  fadeBox.classList.add("fade-out");

  setTimeout(() => {
    fadeBox.innerHTML = `<div class="typing" id="dialogoBox"></div>`;
    fadeBox.classList.remove("fade-out");
    fadeBox.classList.add("fade-in");

    const box = document.getElementById("dialogoBox");
    let i = 0;
    const intervalo = setInterval(() => {
      if (i < texto.length) {
        box.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        if (callback) callback();
      }
    }, 35);
  }, 500);
}

function iniciarDialogo() {
  mostrarTextoDigitado(
    "Olá? Ah... Faz tanto tempo que eu não converso com uma pessoa de verdade. Admito que estava esperando a ligação de outra pessoa, mas não faz mal... Qual seu nome?",
    () => {
      fadeBox.innerHTML += `
        <form id="nomeForm" style="margin-top: 20px; text-align: center;">
          <input type="text" id="nomeInput" placeholder="Digite seu nome" />
          <button type="submit">Enviar</button>
        </form>
      `;
      document.getElementById("nomeForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nomeInput").value.trim();
        if (nome) etapa2(nome);
      });
    }
  );
}

function etapa2(nome) {
  const texto = `Oi, ${nome}. Deve ter sido complicado de chegar aqui, né? Hahah, eu achei até que tinham se esquecido de mim... Me diz, como vão as coisas em Scienutopia?`;
  mostrarTextoDigitado(texto, () => {
    fadeBox.innerHTML += `
      <div style="margin-top: 20px;">
        <p>1- Está tudo indo bem.<br>2- Está tudo um caos.</p>
        <form id="respostaForm" style="text-align: center;">
          <input type="text" id="respostaInput" placeholder="Digite 1 ou 2" />
          <button type="submit">Responder</button>
        </form>
      </div>
    `;
    document.getElementById("respostaForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const r = document.getElementById("respostaInput").value.trim();
      if (r === "1") etapa3("É mesmo? Hmm... Bom, eu fico feliz em saber.");
      else if (r === "2") etapa3("Um caos? Admito que não estou tão impressionado. Estamos em Outubro, afinal. Outubro... Sempre essa época do ano, né?");
    });
  });
}

function etapa3(texto) {
  mostrarTextoDigitado(texto, () => {
    fadeBox.innerHTML += `
      <br>
      <div style="text-align: center;">
        <button id="proximoBtn">Continuar</button>
      </div>
    `;
    document.getElementById("proximoBtn").addEventListener("click", etapa4);
  });
}

function etapa4() {
  const texto = `Queria estar mais próximo. Eu sinto falta da cidade, das ruas, de assistir ao jornal de manhã, de ir tomar café na minha lanchonete favorita, de ficar de conversa fiada com meus colegas de trabalho... Ah... Mas eu não posso voltar, não, de jeito nenhum.`;
  mostrarTextoDigitado(texto, () => {
    fadeBox.innerHTML += `
      <div style="margin-top: 20px;">
        <p>1- Quem é você?<br>2- Você é o Hacker?</p>
        <form id="respostaForm2" style="text-align: center;">
          <input type="text" id="respostaInput2" placeholder="Digite 1 ou 2" />
          <button type="submit">Responder</button>
        </form>
      </div>
    `;
    document.getElementById("respostaForm2").addEventListener("submit", function (e) {
      e.preventDefault();
      const r = document.getElementById("respostaInput2").value.trim();
      if (r === "1") etapa5("Eu? Ninguém importante, ao menos não mais. Eu fugi há muito tempo, eu precisei! Não sou nenhum criminoso nem nada do tipo, mas o quê eles pensariam de mim se me vissem desse jeito? O quê ELE pensaria?");
      else if (r === "2") etapa5("Hacker?! Hahah, não. O máximo que eu sabia de computação era escrever artigos para meu antigo trabalho, ou jogar Paciência quando meu chefe não tava olhando. Eu cheguei, sim, a conhecer um carinha que manjava dessas coisas, mas já faz muito tempo...");
    });
  });
}

function etapa5(texto) {
  mostrarTextoDigitado(texto, () => {
    fadeBox.innerHTML += `
      <br>
      <div style="text-align: center;">
        <button id="proximoBtn2">Continuar</button>
      </div>
    `;
    document.getElementById("proximoBtn2").addEventListener("click", etapaFinal);
  });
}

function etapaFinal() {
  const texto = `Enfim, de qualquer forma eu...\n\n[Você escuta alguns barulhos de fundo, parece que há alguém se aproximando cautelosamente. Os sons de grama sendo pisadas e o ruído de conexão sendo perdida fica cada vez mais alto.]\n\nDroga, acho que tem gente vindo. Argh! Que luz forte... Eu... Eu preciso ir agora. A̴ ̶l̵u̶z̸ ̷m̶a̸c̵h̸u̴c̶a̷ ̶m̷e̸u̴s̸ ̵o̵l̴h̶o̸s̴,̸ ̴m̵e̶ ̷d̵e̴i̵x̶a̷ ̸d̸e̶s̸n̴o̶r̸t̵e̵a̸d̶o̵,̸ ̷c̵o̷n̶f̴u̷s̶o̴.̵.̵.̴ ̸E̵u̴.̸.̸.̵`;
  mostrarTextoDigitado(texto, () => {
    fadeBox.innerHTML += `
      <br>
      <div style="text-align: center;">
        <button id="fimBtn">Encerrar</button>
      </div>
    `;
    document.getElementById("fimBtn").addEventListener("click", () => {
      mostrarTextoDigitado("[A ligação caiu.]");
    });
  });
}
