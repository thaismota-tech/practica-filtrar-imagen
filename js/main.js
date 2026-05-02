/** OBJETO QUE CONTIENE LAS COLECCIONES DE IMÁGENES POR CATEGORÍA CON PROPIEDADES SRC Y ALT
 * LÓGICA PRINCIPAL DE MI APLICACIÓN: "FILTRAR IMAGEN"
 * CADA CATEGORÍA CONTIENE UN ARRAY DE OBJETOS CON LAS PROPIEDADES SRC (RUTA DE LA IMAGEN) Y ALT (TEXTO ALTERNATIVO)
 *  @type {Object.<string, Array.<{src: string, alt: string}>>} */
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

// CONECTAR EL DOCUMENTO HTML CON EL JS (DOM):

/** @type {NodeList} - Lista de elementos li que actúan como botones de categoría */
const categorias = document.querySelectorAll('.lista-categorias li');


/** @type {HTMLElement} - Sección principal que contiene la galería */
const galeriaSection = document.getElementById('galeria');


/** @type {HTMLImageElement} Elemento <img> de imagen principal (imagen grande) */
const imagenGrande = document.getElementById('imagen-grande');


/** @type {HTMLElement} - Contenedor donde se inyectan las miniaturas dinámicamente */
const contenedorMiniaturas = document.getElementById('imagenes-miniaturas');

/**
 * MIS FUNCIONES:
 * Muestra la galería de imágenes de la categoría seleccionada, al eliminar la clase "hidden".
 * Elimina las miniaturas anteriores, carga la imagen principal
 * Genera dinámicamente las miniaturas con sus eventos de click
 * y le asigna un evento click para intercambiarla con la imagen grande principal
 *  @param {string} categoriaSeleccionada: 'sunny' o 'culture', etc.
 */

function mostrarGaleria(categoriaSeleccionada) {
    /** @type {Array.<{src: string, alt: string}>} - Array de imágenes de la categoría seleccionada */
    const imagenes = imagenesCategorias[categoriaSeleccionada];

    // Mostrar la sección quitando el "hidden" que estaba en mi doc HTML
    galeriaSection.classList.remove('hidden');

    // Limpiar miniaturas anteriores (por si el usuario cambia de categoría)
    contenedorMiniaturas.innerHTML = "";

    // Cargar la primera imagen como principal
    imagenGrande.src = imagenes[0].src;
    imagenGrande.alt = imagenes[0].alt;

    // Recorre todas las imágenes de la categoría y crea una miniatura por cada una (FOR EACH)
    imagenes.forEach((imagen) => {
        /** @type {HTMLImageElement} - Nueva miniatura creada dinámicamente */
        const nuevaMiniatura = document.createElement('img');
        nuevaMiniatura.src = imagen.src;
        nuevaMiniatura.alt = imagen.alt;

        // Al hacer click en una miniatura, se intercambia con la imagen principal
        nuevaMiniatura.addEventListener('click', () => {
            imagenGrande.src = imagen.src;
            imagenGrande.alt = imagen.alt;
        });
        // Añade la miniatura al contenedor en el DOM
        contenedorMiniaturas.appendChild(nuevaMiniatura);
    });
}

//ESCUCHAR LOS CLICKS DEL USUARIO EN LOS BOTONES DE MI CATEGORÍA:
categorias.forEach(boton => {
    boton.addEventListener('click', () => {

        /** @type {string} -Recupera el valor del atributo 'data-category' y llama a mostrarGaleria() con esa categoría */
        const categoria = boton.getAttribute('data-category');
        mostrarGaleria(categoria);
    });
});