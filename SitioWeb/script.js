document.addEventListener('DOMContentLoaded', (event) => {
    // Actualizar el año en el footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Funcionalidad para el botón de validar certificado UTN
    const botonValidarUtn = document.getElementById('validarUtn');
    if (botonValidarUtn) {
        botonValidarUtn.addEventListener('click', function() {
            const urlValidacionUtn = 'https://sigead.online/alumnos/validar_certificado';
            const codigoUtn = 'CER-GSQTI9HQ-836999';

            navigator.clipboard.writeText(codigoUtn).then(function() {
                alert(`Se abrirá la página de validación de UTN en una nueva pestaña.\nEl código "${codigoUtn}" ha sido copiado a tu portapapeles. Por favor, pégalo en el campo correspondiente.`);
                window.open(urlValidacionUtn, '_blank');
            }, function(err) {
                console.error('Error al intentar copiar al portapapeles: ', err);
                alert(`Se abrirá la página de validación de UTN en una nueva pestaña.\nNo se pudo copiar el código al portapapeles. Por favor, ingresa manualmente: "${codigoUtn}".`);
                window.open(urlValidacionUtn, '_blank');
            });
        });
    }

    // Scroll suave para los enlaces del menú
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            
            if (this.classList.contains('nav-logo') && (targetId === "#" || targetId === "#inicio")) {
                 targetId = '#inicio';
            } else if (targetId === '#') { 
                targetId = '#inicio';
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbar = document.getElementById('navbar');
                let navbarHeight = 0;
                if (navbar && getComputedStyle(navbar).position === 'fixed') {
                    navbarHeight = navbar.offsetHeight;
                }
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});