function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'flex';
  }
  
  function closeAlert() {
    document.getElementById('customAlert').style.display = 'none'; 
  }
  
  function handleSubmit(event) {
    event.preventDefault(); 
    showAlert('Processando o envio do formulário...');
  
    var formData = new FormData(event.target);

    fetch('https://formsubmit.co/lais301m@gmail.com', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        showAlert('Formulário enviado com sucesso!');
      } else {
        throw new Error('Falha ao enviar o formulário');
      }
    })
    .catch(error => {
      showAlert('Erro: ' + error.message);
    });
  }