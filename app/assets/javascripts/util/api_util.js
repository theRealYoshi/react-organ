var ApiUtil = {
  fetch: function () {
    $.ajax({
      url: "/api/recipes",
      dataType: "json",
      success: function(recipes){
        RecipeActions.resetRecipes(recipes);
      }
    });
  },
  create: function(recipe){
    $.post("/api/recipes", {recipe: recipe}, function(recipe){
        RecipeActions.createRecipe(recipe);
    });
  },
};
