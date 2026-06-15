document.addEventListener('DOMContentLoaded', () => {
    console.log("%cSite da Copa do Mundo 2026 carregado com sucesso! 🏆", 
                "color: #00b14f; font-family: monospace; font-size: 14px;");

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Toggle Dark Mode (já está dark, mas deixa preparado)
    window.toggleDarkMode = function() {
        alert("O site já está no modo escuro! ⚫\n\nFuturamente poderemos adicionar tema claro.");
    };

    // Animação simples ao scroll (opcional)
    const cards = document.querySelectorAll('.card-hover');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});
