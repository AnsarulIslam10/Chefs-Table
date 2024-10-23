import { useEffect, useState } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    console.log(recipes)
    return (
        <div className='md:w-2/3'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                recipes.map(recipe => <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl">
                    <figure className="px-8 pt-6">
                      <img className="md:h-56 w-full rounded-xl"
                        src={recipe.recipe_image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{recipe.recipe_name}</h2>
                      <p>{recipe.short_description}</p>
                      <ul>
                        <h2 className="text-2xl font-medium">Ingredients: {recipe.ingredients.length}</h2>
                        {
                            recipe.ingredients.map((ingredient, idx) => <li className="list-disc ml-6 text-base" key={idx}>{ingredient}</li>)
                        }
                      </ul>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
            }
            </div>
        </div>
    );
};

export default Recipes;