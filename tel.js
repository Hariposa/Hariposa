const fadeBox = document.getElementById("fadeBox");
const msg = document.getElementById("msg");
const audioContainer = document.getElementById("audioContainer");

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
    "Alô? Ah! É você! Achei que não fosse ligar novamente... Heh heh, fico feliz de ver que eu estava enganado. Desculpa pela última vez que nos falamos, alguém meio inesperado acabou aparecendo e me pegou de surpresa... Acabei desligando sem nem te dar tchau, tive que sair correndo, mas deu tudo certo.",
    () => {
      fadeBox.innerHTML += `
        <div style="margin-top: 20px;">
          <p>1- Porquê você saiu correndo?<br>2- Quem estava atrás de você?</p>
          <form id="respostaForm" style="text-align: center;">
            <input type="text" id="respostaInput" placeholder="Digite 1 ou 2" />
            <button type="submit">Responder</button>
          </form>
        </div>
      `;
      document.getElementById("respostaForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const r = document.getElementById("respostaInput").value.trim();
        if (r === "1") etapaA();
        else if (r === "2") etapaB();
      });
    }
  );
}

function etapaA() {
  mostrarTextoDigitado(
    "Alguém apareceu com uma lanterna da luz super forte, foi bem na minha cara! Digamos que os meus olhos são meio, uh... Sensíveis. Sempre fico muito aéreo quando isso acontece, dói pra caramba, sabia? Imagine levar um flash de luz bem na fuça! Fiquei todo tonto, hahah... Mas já passou, ainda bem. Acho que eu tava falando alto demais com você no telefone, alguém percebeu minha presença e veio checar. E cá entre nós, eu não estou com muita vontade de ser encontrado... Ao menos, não desse jeito. Não agora.",
    etapaC
  );
}

function etapaB() {
  mostrarTextoDigitado(
    "Não sei dizer ao certo. Nos últimos dias, alguns guardas estão fazendo uma patrulha pela floresta, acho que estão atrás de alguém. É sempre esse grupo de guardas e às vezes aparece um carinha todo pomposo junto deles, ele parece bem preocupado. Me pergunto... Quem será que eles estão procurando? Sei que não é a mim, não aparece ninguém à minha procura há mais de... Hmm... Um, dois... Três... Uhh... Bom, eu meio que já perdi a conta, mas fazem alguns anos que já desistiram. Também, não é como se eu quisesse ser encontrado, de qualquer forma.",
    etapaC
  );
}

function etapaC() {
  fadeBox.innerHTML += `
    <div style="margin-top: 20px;">
      <p>1- Porquê você não quer ser encontrado?<br>2- O quê aconteceu com você?</p>
      <form id="respostaForm2" style="text-align: center;">
        <input type="text" id="respostaInput2" placeholder="Digite 1 ou 2" />
        <button type="submit">Responder</button>
      </form>
    </div>
  `;
  document.getElementById("respostaForm2").addEventListener("submit", function (e) {
    e.preventDefault();
    const r = document.getElementById("respostaInput2").value.trim();
    if (r === "1") etapaD();
    else if (r === "2") etapaE();
  });
}

function etapaD() {
  mostrarTextoDigitado(
    "As pessoas que me conheceram no passado não me reconheceriam mais. Eu mudei tanto, tanto... Você ficaria chocado se tivesse me conhecido antes, se visse como estou agora. Eu não digo apenas de aparência, apesar de ter sido meio brutal, também digo de psicológico. Eu não acho que eu teria coragem de viver no meio da multidão novamente, sei que me julgariam muito. Às vezes, vejo outros como eu, espalhados pela floresta, mas eles não parecem tão amigáveis em Outubro... Preferem ficar sozinhos e eu entendo eles, todos juntos, espalhados pelo mesmo ambiente e ainda sim solitários... Estar sozinho me magoa, não vou mentir pra você, dói muito quando paro pra pensar nisso... Mas é o quê tenho, não é? É o quê eu escolhi, afinal... Minha própria companhia.",
    etapaF
  );
}

function etapaE() {
  mostrarTextoDigitado(
    "Quando te dizem que a prática leva à perfeição, esquecem de te dizer que às vezes você tem que deixar algumas coisas para trás pra conseguir a tal perfeição... E que, às vezes no final, você sequer consegue atingir a perfeição que tanto buscou. Na verdade, acho que a prática exagerada e o perfeccionismo sem escrúpulos levam à sua ruína. Heh heh, pareci até um poeta falando isso, né? Mas, bom, é verdade. Eu não me arrependo do meu esforço, eu realmente queria aquilo, mas me arrependo de como algumas escolhas do passado acabaram resultando nesse meu presente. Eu segui a algo que eu acreditava como a minha verdade, o meu futuro... Mas por conta de um deslize, foi tudo por água abaixo. E olhe onde eu estou agora... Sozinho, sem ninguém, no meio da floresta... Falando com um estranho que eu mal conheço... Uh, sem ofensas, claro!",
    etapaF
  );
}

function etapaF() {
  fadeBox.innerHTML += `
    <div style="margin-top: 20px;">
      <p>1- Eu sinto muito por isso.<br>2- Você não precisa estar sozinho.</p>
      <form id="respostaForm3" style="text-align: center;">
        <input type="text" id="respostaInput3" placeholder="Digite 1 ou 2" />
        <button type="submit">Responder</button>
      </form>
    </div>
  `;
  document.getElementById("respostaForm3").addEventListener("submit", function (e) {
    e.preventDefault();
    const r = document.getElementById("respostaInput3").value.trim();
    if (r === "1") {
      mostrarTextoDigitado(
        "Nah, tudo bem... Obrigado por se importar. Ei, mas quero que você saiba que, apesar de tudo isso, fico feliz de ter você por aqui pra falar comigo... Sinto falta de conversar com alguém. Eu queria poder te ver, mas... Acho que você iria se assustar se me visse pessoalmente.",
        etapaI
      );
    } else if (r === "2") {
      mostrarTextoDigitado(
        "Não preciso...? Ah... Eu sei, eu não deveria passar por tudo isso sozinho. Eu não gosto de estar sozinho, eu nem sequer gosto daqui... Eu sinto tanta falta da minha casa, dos meus amigos... Dele... E eu até penso às vezes em como eu queria poder te conhecer pessoalmente também, não ficar só batendo um papo curto pelo telefone. Mas, acho que você se assustaria se me visse...",
        etapaI
      );
    }
  });
}

function etapaI() {
  fadeBox.innerHTML += `
    <div style="margin-top: 20px;">
      <p>1- Eu posso ir até você.<br>2- Então venha até mim.</p>
      <form id="respostaForm4" style="text-align: center;">
        <input type="text" id="respostaInput4" placeholder="Digite 1 ou 2" />
        <button type="submit">Responder</button>
      </form>
    </div>
  `;
  document.getElementById("respostaForm4").addEventListener("submit", function (e) {
    e.preventDefault();
    const r = document.getElementById("respostaInput4").value.trim();
    if (r === "1") {
      mostrarTextoDigitado(
        "Andar na floresta à noite é bem perigoso, não sei se seria uma boa ideia... Mas, se você quiser tentar, posso passar as coordenadas, só precisa me prometer que você vai vir sozinho. Ah, e sem lanternas, você sabe que eu não gosto nem um pouco delas... Preciso pensar em um ponto antes e aí eu te retorno a ligação, pode ser?\n\n[Você escuta sons de grama sendo pisada ao redor... Um falatório de um grupo de pessoas de fundo, quase inaudível. A pessoa por trás do telefone começa a sussurrar.]\n\nPsst...! Escuta! Parece que os guardas tão por aqui de novo... Estão vindo do sentido oposto, da outra vez eles... Ah, olha só, o pomposo tá aqui de novo... E parece que tem mais alguém com eles dessa vez... Ei, acho que aquele é o tal do... Uh... Ah! Foi mal, colega, quase me distraí. Eu preciso ir, está bem? Mas não vou me esquecer do que combinamos. Fique no aguardo da minha resposta. Até mais!",
        () => {
          fadeBox.innerHTML += `
            <br>
            <div style="text-align: center; margin-top: 20px;">
              <button id="encerrarBtn">Encerrar a ligação</button>
            </div>
          `;
          document.getElementById("encerrarBtn").addEventListener("click", etapaFinal);
        }
      );
    } else if (r === "2") {
      mostrarTextoDigitado(
        "Ir até você? Não, não... Eu não posso sair da floresta, já te disse! Mas, podemos pensar em outro jeito... Por mais que seja perigoso, se você quiser vir até mim, acho que podemos nos encontrar de alguma forma... Se você quiser, claro. Eu posso passar as coordenadas, só precisa me prometer que você vai vir sozinho. Ah, e sem lanternas, você sabe que eu não gosto nem um pouco delas... Preciso pensar em um ponto antes e aí eu te retorno a ligação, pode ser?\n\n[Você escuta sons de grama sendo pisada ao redor... Um falatório de um grupo de pessoas de fundo, quase inaudível. A pessoa por trás do telefone começa a sussurrar.]\n\nPsst...! Escuta! Parece que os guardas tão por aqui de novo... Estão vindo do sentido oposto, da outra vez eles... Ah, olha só, o pomposo tá aqui de novo... E parece que tem mais alguém com eles dessa vez... Ei, acho que aquele é o tal do... Uh... Ah! Foi mal, colega, quase me distraí. Eu preciso ir, está bem? Mas não vou me esquecer do que combinamos. Fique no aguardo da minha resposta. Até mais!",
        () => {
          fadeBox.innerHTML += `
            <br>
            <div style="text-align: center; margin-top: 20px;">
              <button id="encerrarBtn">Encerrar a ligação</button>
            </div>
          `;
          document.getElementById("encerrarBtn").addEventListener("click", etapaFinal);
        }
      );
    }
  });
}

function etapaFinal() {
  fadeBox.innerHTML = `
    <div style="text-align: center; font-size: 24px; margin-top: 40px;">
      [Fim da ligação]
    </div>
  `;
}
