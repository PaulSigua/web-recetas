function searchRecipes() {
    var searchTerm = document.getElementById('recipe-search').value.toLowerCase(); // Obtén el término de búsqueda y conviértelo a minúsculas para una búsqueda sin distinción entre mayúsculas y minúsculas
    var recipes = document.querySelectorAll('.recetas'); // Selecciona todos los elementos con la clase 'recipe'
    recipes.forEach(function (recipe) {
        var recipeTitle = recipe.querySelector('h2').textContent.toLowerCase(); // Obtén el título de la receta y conviértelo a minúsculas
        var recipeDescription = recipe.querySelector('p').textContent.toLowerCase(); // Obtén la descripción de la receta y conviértelo a minúsculas

        if (recipeTitle.includes(searchTerm) || recipeDescription.includes(searchTerm)) {
            recipe.style.display = 'block'; // Muestra la receta si coincide con el término de búsqueda
        } else {
            recipe.style.display = 'none'; // Oculta la receta si no coincide
        }
    });
}

function validarYGuardar() {
    const recipeName = document.getElementById("nombre").value;
    const ingredients = document.getElementById("ingredientes").value;
    const procedure = document.getElementById("pasos").value;
  
    if (recipeName.trim() === "" || ingredients.trim() === "" || procedure.trim() === "") {
      alert("Por favor, complete todos los campos antes de enviar el formulario.");
    } else {
      const recipe = {
        name: recipeName,
        ingredients: ingredients,
        procedure: procedure,
      };
      const recipeKey = `recipe_${Date.now()}`;
      localStorage.setItem(recipeKey, JSON.stringify(recipe));
  
      // Redirigir a la página de recetas
      window.location.href = "recetas.html";
    }
  }
