const Sidebar = ({ recipeQueue }) => {
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
                <td><button onClick={()=> console.log('preparing')} className="px-2 py-1 md:px-4 bg-green-400 rounded-full cursor-pointer hover:bg-green-500 transition-all font-bold">Preparing</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking table */}
    </div>
  );
};

export default Sidebar;
