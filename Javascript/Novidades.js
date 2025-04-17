document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove a classe active de todos os links
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('active');
        });
        
        // Adiciona a classe active ao link clicado
        this.classList.add('active');
        
        // Pega o id da seção alvo
        const targetId = this.getAttribute('href');
        
        // Verifica se o link aponta para um ID na página atual
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Rolagem suave para o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // Se não for um link para ID, navega normalmente
            window.location.href = targetId;
        }
    });
});

// Atualiza a classe active conforme a rolagem
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === '#' + sectionId) {
                    a.classList.add('active');
                }
            });
        }
    });
});