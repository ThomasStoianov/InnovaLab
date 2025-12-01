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

const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('header nav ul');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// BOTÃO "COMEÇAR"
document.getElementById("comecar").addEventListener("click", function(e) {

    // 1) bloquear mobile
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    if (isMobile) {
        e.preventDefault();
        alert("Este jogo só pode ser jogado em computador. Use um PC para jogar.");
        return;
    }

    // 2) alerta para telas pequenas
    if (window.innerWidth <= 1250) {
        alert("Atenção: Para melhor experiência, mude para desktop!");
        return;
    }

    // 3) abrir a unity dentro do iframe (sem trocar de página)
    const iframe = document.getElementById("unity-iframe");
    iframe.src = "./InnovaLabBuild/index.html";
    document.getElementById("unity-overlay").style.display = "flex";
});

document.getElementById("unity-close").addEventListener("click", function () {
    const overlay = document.getElementById("unity-overlay");
    const iframe = document.getElementById("unity-iframe");

    overlay.style.display = "none";   // esconder overlay
    iframe.src = "";                  // limpar Unity (senão continua rodando)
});

const video = document.querySelector('.slide video');

    video.muted = true; // garantir que está mutado
    video.play().catch(() => {
        // Se falhar, tenta de novo após o carregamento
        video.addEventListener('canplay', () => video.play());
    });