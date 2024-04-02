const buttons = document.querySelectorAll('.tecla');

for(i = 0; i < buttons.length; i++) {
    const tecla = buttons[i]
    const listaDeTeclas = tecla.classList[1];
    const instrumento = `som_${listaDeTeclas}`

    tecla.addEventListener('click', function() {
        tocaSom(instrumento);
    });
}

function tocaSom(id) {
    document.getElementById(id).play();
}