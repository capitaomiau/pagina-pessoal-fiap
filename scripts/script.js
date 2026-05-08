const button = document.getElementById("botão")
const navi = document.getElementById("navegador")

button.addEventListener("click", () => {
    const aberto = navi.classList.toggle("aberto")
    button.classList.toggle("aberto")
})

document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", () => {
        navi.classList.remove("aberto")
        button.classList.remove("aberto")
    })
})

const btnTop = document.querySelector("#voltar")

window.onscroll = function() {
  if (window.scrollY > 300) {
    btnTop.style.display = "block"
  } else {
    btnTop.style.display = "none"
  }
}

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

const valid = document.querySelector(".sucesso")
const erro = document.querySelector(".falhou")
const form = document.querySelector("form")
const nome = document.querySelector("#name")
const email = document.querySelector("#emailaddress")
const mensagem = document.querySelector("#message")
const tupla = document.querySelector("#tupla")
const mail = document.querySelector("#mail")
const box = document.querySelector("#box")
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/

nome.addEventListener("blur", function() {
  if (!regexNome.test(nome.value.trim()) || nome.value.trim().length < 3) {
    tupla.textContent = "⨻ Nome deve ter pelo menos 3 caracteres e conter apenas letras."
    nome.classList.add("out")
  } else {
    tupla.textContent = ""
    nome.classList.remove("out")
  }
});

email.addEventListener("blur", function() {
  if (!regexEmail.test(email.value.trim())) {
    mail.textContent = "⨻ Por favor, insira um email válido. (ex: usuario@dominio.com)"
    email.classList.add("out")
  } else {
    mail.textContent = ""
    email.classList.remove("out")
  }
})

mensagem.addEventListener("blur", function() {
  if (mensagem.value.trim().length < 10) {
    box.textContent = "⨻ A mensagem deve conter pelo menos 10 caracteres."
    mensagem.classList.add("out")
  } else {
    box.textContent = ""
    mensagem.classList.remove("out")
  }
})

form.addEventListener("submit", function(event) {
  event.preventDefault()

  if (!regexNome.test(nome.value.trim()) || nome.value.trim().length < 3 || !regexEmail.test(email.value.trim()) || mensagem.value.trim().length < 10) {
    erro.classList.add("on")
  } else {
    valid.classList.add("on")
    console.log("Formulário enviado com sucesso!" + "\nNome: " + nome.value.trim() + "\nEmail: " + email.value.trim() + "\nMensagem: " + mensagem.value.trim())
    setTimeout(function() {
      valid.classList.remove("on")
    }, 3500)
    form.reset()
  }
})
