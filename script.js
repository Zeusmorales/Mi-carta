// Seleccionamos el elemento principal que contiene toda la carta.
const envoltura = document.querySelector('.envoltura-carta');

// Añadimos un "escuchador de eventos" que se activa cuando el usuario hace clic.
envoltura.addEventListener('click', () => {
    // Cuando se hace clic, añadimos o quitamos la clase "abierta".
    // El CSS que escribimos antes se encarga de la animación cuando esta clase está presente.
    envoltura.classList.toggle('abierta');
});
