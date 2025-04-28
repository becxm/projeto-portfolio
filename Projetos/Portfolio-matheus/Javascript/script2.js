
        let prevScrollPos = window.pageYOffset;
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                header.classList.remove('cabecalho-escondido');
                footer.classList.remove('rodape-escondido');
            } else {
                header.classList.add('cabecalho-escondido');
                footer.classList.add('rodape-escondido');
            }

            prevScrollPos = currentScrollPos;
        });