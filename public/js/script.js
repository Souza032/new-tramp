

const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");
const apagarItem = document.querySelector("#apagar")

closeMessage.addEventListener("click", function () {
    message.style.display = "none"
});

setTimeout(() => {
    message.style.display = "none"
}, 5000);


apagarItem.addEventListener("click", function () {
  pw == 1 
  
});

setTimeout(() => {
  message.style.display = "none"
}, 5000);



// Exibindo o modal com a mudança do sisplay para flex
btn.addEventListener("click", () => {
    if (user.value === "" || pass.value === "") {
      h3.textContent = "Preencha todos os campos!";
      modal.style.display = "flex";
    } else {
      h3.textContent = "Login efetuado com sucesso!";
      modal.style.display = "flex";
    }
  });
  // Fechando (ocultando) o modal com a mudança do display para none
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  