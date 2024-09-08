const { Alert } = require("bootstrap");

function sendToWhatsApp(productName) {
    const phoneNumber = "5516988657763"; // Coloque aqui o número do WhatsApp, com código do país e DDD
    const message = `Vi o produto ${productName} no site, me interessei por ele! Quais cores vocês tem disponivel?`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

//

 


    // Exibir o modal de cookies ao carregar a página se o usuário não aceitou/rejeitou
    window.onload = function() {
      if (!localStorage.getItem('cookieConsent')) {
        var cookieModal = new bootstrap.Modal(document.getElementById('cookieConsentModal'), {
          backdrop: 'static',
          keyboard: false
        });
        cookieModal.show();
      }
    };

    // Botão de aceitar cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      var cookieModal = bootstrap.Modal.getInstance(document.getElementById('cookieConsentModal'));
      cookieModal.hide();
    });

    // Botão de recusar cookies
    document.getElementById('declineCookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'declined');
      var cookieModal = bootstrap.Modal.getInstance(document.getElementById('cookieConsentModal'));
      cookieModal.hide();
    });

