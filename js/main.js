/**
 * Objeto que contiene las colecciones de imágenes por categoría.
 * Cada categoría es un Array de Objetos con propiedades src y alt.
 */
const imagenesCategorias = {
    sunny: [
        { src: "assets/pic21.jpg", alt: "Playa con mar azul donde se ven algunos yachts" },
        { src: "assets/pic22.jpg", alt: "Mar y arena donde se ve una estrella del mar" },
        { src: "assets/pic23.jpg", alt: "Pareja tomando agua de coco en piscina infinita" },
        { src: "assets/pic24.jpg", alt: "Pareja joven sentada en la arena" }
    ],
    culture: [
        { src: "assets/pic16.jpg", alt: "Piramide del museo del Louvre en Paris de noche" },
        { src: "assets/pic17.jpg", alt: "Tulum, Riviera Maya en México" },
        { src: "assets/pic20.jpg", alt: "Chichén Itzá, México" },
        { src: "assets/pic19.jpg", alt: "El coliseo romano" }
    ],
    religion: [
        { src: "assets/pic8.jpg", alt: "Una multitud de turistas en el Vaticano" },
        { src: "assets/pic9.jpg", alt: "La Ciudad Vieja de Jerusalén" },
        { src: "assets/pic10.jpg", alt: "El Cristo de brazos abiertos encima del monte" },
        { src: "assets/pic11.jpg", alt: "La Puerta Handara (Handara Gate), en Bali" }
    ],
    dark: [
        { src: "assets/pic12.jpg", alt: "Las Catacumbas de París" },
        { src: "assets/pic13.jpg", alt: "El campo de concentración de Auschwitz" },
        { src: "assets/pic14.jpg", alt: "Memorial de la Paz de Hiroshima en Japón" },
        { src: "assets/pic15.jpg", alt: "La antigua ciudad romana de Pompeya" }
    ]
};

// CONECTAR EL DOCUMENTO HTML CON EL JS:
//Lista de elementos li que actúan como botones de categoría:
const categorias = document.querySelectorAll('.lista-categorias li');
//Sección principal que contiene la galería:
const galeriaSection = document.getElementById('galeria');
//Elemento de imagen principal (imagen grande):
const imagenGrande = document.getElementById('imagen-grande');
//Div contenedor donde se inyectan las miniaturas:
const contenedorMiniaturas = document.getElementById('imagenes-miniaturas');

function mostrarGaleria(categoriaSeleccionada) {
    const imagenes = imagenesCategorias[categoriaSeleccionada];

// Mostrar la sección quitando "hidden"
    galeriaSection.classList.remove('hidden');

// Limpiar miniaturas anteriores (por si el usuario cambia de categoría)
    contenedorMiniaturas.innerHTML = "";

// Cargar la primera imagen como principal
    imagenGrande.src = imagenes[0].src;
    imagenGrande.alt = imagenes[0].alt;

// Crear las miniaturas con un bucle
    imagenes.forEach((imagen) => {
        const nuevaMiniatura = document.createElement('img');
        nuevaMiniatura.src = imagen.src;
        nuevaMiniatura.alt = imagen.alt;

// Evento para intercambiar con la grande al hacer click
    nuevaMiniatura.addEventListener('click', () => {
        imagenGrande.src = imagen.src;
        imagenGrande.alt = imagen.alt;
});

    contenedorMiniaturas.appendChild(nuevaMiniatura);
});
}

//ESCUCHAR LOS CLICKS DEL USUARIO EN LOS BOTONES DE MI CATEGORÍA:
categorias.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.getAttribute('data-category');
        mostrarGaleria(categoria);
});
});