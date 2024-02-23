
window.addEventListener('load', function () {
    foco()
})

function foco() {
    document.querySelector('body').classList.add('encendido')
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Demostraciones de desarrollo web ${anio}`;
    document.body.appendChild(titulo);

    var foco = 2

    const img = document.querySelector('img')
    img.addEventListener('click',() => {
        // Busca si la cadena 'apagado' esta en el attributo src
        if(foco == 1) {
        // Cambiamos la imagen y el fondo
        document.body.classList.remove('apagado');
        document.body.classList.add('encendido');
        foco++
    } else {
        // Cambiamos la imagen y el fondo
        document.body.classList.remove('encendido');
        document.body.classList.add('apagado');
        foco--
    }
})
}
