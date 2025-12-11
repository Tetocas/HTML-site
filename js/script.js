// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Efeito de Navbar Transparente/Sólida ao rolar ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
            // Garante opacidade total ao rolar
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            // No topo, remove o fundo sólido (se quiser transparente total, use bg-transparent)
            // Aqui mantemos um leve escurecimento para leitura
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; 
        }
    });

    // --- 2. Simulação de Envio de Formulário ---
    const contatoForm = document.querySelector('form');
    
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página real
            
            // Captura os dados (apenas para exemplo)
            const nome = document.getElementById('nome').value;
            const btn = contatoForm.querySelector('button');
            const textoOriginal = btn.innerText;

            // Efeito de "Enviando..."
            btn.innerText = 'Enviando transmissão...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Mensagem recebida, ${nome}! A equipe da Cosmos Travel entrará em contato em breve.`);
                contatoForm.reset(); // Limpa os campos
                btn.innerText = textoOriginal;
                btn.disabled = false;
            }, 1500); // Espera 1.5 segundos
        });
    }

    // --- 3. Fechar menu mobile ao clicar (Melhoria de UX) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            // Verifica se o menu está aberto (visível) antes de tentar fechar
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});