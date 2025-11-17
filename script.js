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

document.getElementById("comecar").addEventListener("click", function() {
  // verifica o tamanho da tela
  if (window.innerWidth <= 1250) {
    alert("Atenção: Para melhor experiência, mude para desktop!");
  } else {
    
    window.location.href = "pasta-do-jogo/index.html"; 
  }
});

const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('header nav ul');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.getElementById("comecar").addEventListener("click", function(e) {
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
        e.preventDefault(); // impede abrir a build
        alert("Este jogo só pode ser jogado em computador. Use um PC para jogar.");
    }
});