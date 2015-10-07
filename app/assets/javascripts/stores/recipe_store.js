(function(root) {
  'use strict';

  var _recipes = [], CHANGE_EVENT = "CHANGE";

  var resetRecipes = function(recipes){
    _recipes = recipes;
    RecipeStore.changed();
  };

  var createRecipe = function (recipe) {
    _recipes.push(recipe);
    RecipeStore.changed();
  }
  
  root.RecipeStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _recipes.slice();
    },
    addChangeHandler: function(handler){
      // _handlers.push(handler);
      RecipeStore.on(CHANGE_EVENT, handler);
    },
    removeChangeHandler: function(handler){
      RecipeStore.removeListener(CHANGE_EVENT, handler);
      // var idx = _handlers.indexOf(handler);
      // if (idx !== -1){
      //   _handlers.splice(idx, 1);
      // }
    },
    changed: function(){
      RecipeStore.emit(CHANGE_EVENT);
      // _handlers.forEach(function(handler){
      //   handler();
      // });
    }
  });

  AppDispatcher.register(function(action){
    switch(action.actionType){
      case RecipeConstants.RESET_RECIPES:
        resetRecipes(action.recipes);
        break;

      case RecipeConstants.CREATE_RECIPE:
        createRecipe(action.recipe);
        break;

    }
  });
}(this));
