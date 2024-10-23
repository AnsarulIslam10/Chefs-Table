import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-6">
              <img
                className="md:h-56 w-full rounded-xl"
                src={recipe.recipe_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-600 text-base">
                {recipe.short_description}
              </p>
              <h2 className="text-2xl font-medium">
                Ingredients: {recipe.ingredients.length}
              </h2>
              <ul className="ml-6 text-gray-600 pb-4">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li className="list-disc" key={idx}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 pt-6 border-t-2 text-gray-500 font-semibold">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-2xl"></i>
                  <p>{recipe.preparing_time} minutes</p>
                </div>
                <div className="flex items-center gap-2">
                <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                  <p>{recipe.calories} calories</p>
                </div>
              </div>
              <div className="card-actions mt-6">
                <button className="btn bg-green-400 rounded-full px-8">Want to Cook</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
