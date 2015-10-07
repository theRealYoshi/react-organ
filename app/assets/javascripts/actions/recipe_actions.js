var RecipeActions = {
  createRecipe: function(recipe){
    AppDispatcher.dispatch({
      actionType: RecipeConstants.CREATE_RECIPE,
      recipe: recipe
    });
  },
  resetRecipes: function(recipes){
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RESET_RECIPES,
      recipes: recipes
    });

  }
}
