import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/recipe1.png";
import recipeTwoImage from "../assets/images/recipe2.png";
import recipeThreeImage from "../assets/images/recipe3.png";
import recipeFourImage from "../assets/images/recipe4.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Recipes() {
  return (
    <div className="px-12 py-12">
      <h3 className="font-bold text-2xl mb-12 text-center">Search</h3>
      <div>
        <h3 className="text-xl font-bold mb-2 ">What is in your kitchen?</h3>
        <p>Enter some ingredients</p>
      </div>
      <div className="flex items-center bg-white shadow-md rounded-lg p-2 w-full max-w-md mx-auto border border-teal-500 mb-3 mt-5">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
        <input
          type="text"
          className="flex-grow bg-transparent border-none focus:outline-none"
          placeholder="Type your ingredients"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 justify-around">
        <RecipeCard
          image={recipeOneImage}
          name="Chorizo & mozzarella gnocchi bake"
        />
        <RecipeCard image={recipeTwoImage} name="Coconut & squash curry" />
        <RecipeCard image={recipeThreeImage} name="Huevos Rancheros" />
        <RecipeCard image={recipeFourImage} name="Black forest Gateau" />
      </div>
    </div>
  );
}
