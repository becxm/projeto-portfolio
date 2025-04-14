//Esta parte do Javascript mexe com o botao mostrar mais
document.addEventListener('DOMContentLoaded', function() {
    const botoesMostrarMais = document.querySelectorAll('.mostrar-mais');

    botoesMostrarMais.forEach(botao => {
        botao.addEventListener('click', function() {
            const projetosOcultos = this.parentNode.querySelector('.projetos-ocultos');
            if (projetosOcultos.style.display === 'none' || projetosOcultos.style.display === '') {
                projetosOcultos.style.display = 'block';
                this.textContent = 'Mostrar Menos';
            } else {
                projetosOcultos.style.display = 'none';
                this.textContent = 'Mostrar Mais';
            }
        });
    });

    //E esta mexe com o botao de like 
    const botoesLike = document.querySelectorAll('.like-btn');

    botoesLike.forEach(botao => {
        botao.addEventListener('click', function() {
            const projetoId = this.dataset.projeto;
            const contador = this.querySelector('.like-count');
            let likes = parseInt(contador.textContent);

            likes++;
            contador.textContent = likes;
            this.classList.add('liked');
        });
    });
});