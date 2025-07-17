const frases = [
  "Você é meu coração fora do peito 💘",
  "Eu amo cada pedacinho de você 💗",
  "Estar com você é meu lugar favorito 🏡",
  "Você é meu sol nos dias nublados ☀️",
  "Te amo mais do que pizza 🍕❤️",
  "Com você, tudo fica leve 😍",
  "Você é a melhor parte do meu dia ✨",
  "Meu amor por você só cresce 🌱"
];

const grade = document.querySelector(".grade");
const mensagem = document.getElementById("mensagem");

// cria 12 corações com frases aleatórias
for (let i = 0; i < 12; i++) {
  const botao = document.createElement("button");
  botao.className = "botao-coracao";
  botao.innerText = "❤";
  botao.onclick = () => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    mensagem.innerText = frase;
    botao.disabled = true;
    botao.style.opacity = "0.5";
  };
  grade.appendChild(botao);
}
