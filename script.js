document.addEventListener("DOMContentLoaded", function () {
  const ancoras = document.querySelectorAll(".navegador_ancoras a");
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(
          `.navegador_ancoras a[href="#${id}"]`
        );

        if (entry.isIntersecting) {
          ancoras.forEach((a) => a.classList.remove("ativa"));
          navItem.classList.add("ativa");
        }
      });
    },
    { threshold: 0.7 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  ancoras.forEach((ancora) => {
    ancora.addEventListener("click", function (event) {
      ancoras.forEach((a) => a.classList.remove("ativa"));
      this.classList.add("ativa");
    });
  });
});

function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();
  showAlert("Processando o envio do formulário...");

  var formData = new FormData(event.target);

  fetch("https://formsubmit.co/lais301m@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        showAlert("Formulário enviado com sucesso!");
      } else {
        throw new Error("Falha ao enviar o formulário");
      }
    })
    .catch((error) => {
      showAlert("Erro: " + error.message);
    });
}
