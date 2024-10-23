const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
  return (
    <div className="md:w-1/3 border rounded-2xl text-gray-600 p-2 bg-base-100 ml-4 shadow-xl">
      {/* want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="text-center border-b-2 py-2 font-bold text-2xl">Want to cook: {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>

                <td><button onClick={()=> {
                    handleRemove(recipe.recipe_id)
                    calculateTimeAndCalories(recipe.preparing_time, recipe.calories)} 
                } className="px-2 py-1 md:px-4 bg-green-400 rounded-full cursor-pointer hover:bg-green-500 transition-all font-bold">Preparing</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="text-center border-b-2 py-2 font-bold text-2xl">Currently cooking: {preparedRecipe.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
            <th></th>
                <td></td>
                <td>Total time = {totalTime} minutes</td>
                <td>Total calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
