var Recipes = React.createClass({
  getInitialState: function () {
    return { recipes: RecipeStore.all() };
  },
  createRecipe: function(recipe){
    // RecipeStore.create(recipe);
    ApiUtil.create(recipe);
  },
  _recipesChanged: function () {
    this.setState({recipes: RecipeStore.all()});
  },
  componentDidMount: function(){
    RecipeStore.addChangeHandler(this._recipesChanged);
    // RecipeStore.fetch();
    ApiUtil.fetch();
    //cannot do this right here
    // this.setState({recipes: RecipeStore.all()});
  },
  render: function () {
    return (
      <div>
          <RecipesForm create={this.createRecipe}/>
          <RecipesList recipes={this.state.recipes}/>
      </div>
    );
  }
});
