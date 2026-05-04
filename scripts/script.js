const button = document.getElementById('botão');
const navi = document.getElementById('navegador');

button.addEventListener('click', () => {
    const aberto = navi.classList.toggle('aberto');
    button.classList.toggle('aberto');
});

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        navi.classList.remove('aberto');
        button.classList.remove('aberto');
    });
});

const btnTop = document.querySelector("#voltar");

window.onscroll = function() {
  if (window.scrollY > 300) { //
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
