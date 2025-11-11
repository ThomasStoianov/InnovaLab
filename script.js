const carrossel = document.getElementById("carrossel");
const dots = document.querySelectorAll(".dot")

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        let index = dot.getAttribute("data-index")

        carrossel.style.transform = `translateX(-${index * 100}%)`
    })
});

// ANIMAÇÕES
lottie.loadAnimation({
  container: document.querySelector('.anim-computador'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/Secure_Login.json'
});


lottie.loadAnimation({
    container: document.getElementById("anim-homem-trabalhando"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Man_Working.json',
    
})

lottie.loadAnimation({
    container: document.getElementById("anim-handshake"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Business_Handshake.json'
})

let avisoMostrado = false;

function verificarLargura() {
    const largura = window.innerWidth || document.documentElement.clientWidth;
    if (largura <= 1250 && !avisoMostrado) {
        alert("Atenção: Para melhor experiência de navegação no treinamento, mude para desktop!");
        avisoMostrado = true;
    } else if (largura > 1250) {
        avisoMostrado = false;
    }
}

verificarLargura();
window.addEventListener("resize", verificarLargura);