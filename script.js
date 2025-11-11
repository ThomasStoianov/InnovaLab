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

// Verifica a largura da tela ao carregar a página
if (window.innerWidth <= 1250) {
   alert("Atenção: Para melhor experiência de navegação no treinamento, mude para desktop!");
}

// Também verifica se o usuário redimensiona a janela
window.addEventListener("resize", function() {
   if (window.innerWidth <= 1250) {
    alert("Atenção: Para melhor experiência de navegação no treinamento, mude para desktop!");
   }
});