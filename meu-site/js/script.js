// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Script para validação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real para fins de demonstração
            
            const nome = document.getElementById('nomeInput').value;
            const email = document.getElementById('emailInput').value;
            
            if(nome && email) {
                alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\nEntraremos em contato pelo e-mail: ${email}`);
                contactForm.reset(); // Limpa o formulário
            } else {
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        });
    }

    // 2. Script para marcar o link ativo na Navbar (Opcional, pois fiz hardcode no HTML)
    // Mas é útil se você quiser automatizar no futuro
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "nav-link active";
        }
    }
});