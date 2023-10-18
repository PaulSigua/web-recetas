$(document).ready(function () {
    // Capturar el formulario
    $("section#inicio form").submit(function (e) {
        e.preventDefault();

        const nombre = $("#nombre").val();
        const ingredientes = $("#ingredientes").val();
        const pasos = $("#pasos").val();

        if (nombre && ingredientes && pasos) {
            const receta = {
                nombre,
                ingredientes,
                pasos,
            };

            let recetas = JSON.parse(localStorage.getItem('recetas')) || [];
            recetas.push(receta);
            localStorage.setItem('recetas', JSON.stringify(recetas));

            // Limpia el formulario
            $("section#inicio form")[0].reset();

            // Actualiza la lista de recetas
            mostrarRecetas();
        }
    });

    // Función para mostrar recetas
    function mostrarRecetas() {
        const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
        const recetasLista = $("#recetas-lista");
        recetasLista.empty();

        recetas.forEach((receta, index) => {
            recetasLista.append(
                `<div class="receta">
                    <h3>${receta.nombre}</h3>
                    <p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
                    <p><strong>Pasos:</strong> ${receta.pasos}</p>
                </div>`
            );
        });
    }

    // Filtrar recetas por nombre
    $("#search").on("input", function () {
        const searchTerm = $(this).val().toLowerCase();
        const recetas = JSON.parse(localStorage.getItem('recetas')) || [];
        const recetasFiltradas = recetas.filter((receta) => {
            return receta.nombre.toLowerCase().includes(searchTerm);
        });

        mostrarRecetas(recetasFiltradas);
    });

    // Mostrar recetas al cargar la página
    mostrarRecetas();
});
