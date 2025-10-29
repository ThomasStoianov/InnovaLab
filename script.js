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
  path: '../animations/60 fps computer.json'
});


lottie.loadAnimation({
    container: document.getElementById("anim-engrenagem"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../animations/Gears animation.json'
})

lottie.loadAnimation({
    container: document.getElementById("anim-handshake"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../animations/Handshake.json'
})