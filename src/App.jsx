import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])
  // creating usestate for preparing section
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeToQueue = (recipe) =>{
    // to check if the recipe already exist in the array
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }else{
      alert('Recipe already exists')
    }
  }

  const handleRemove = id =>{
    //find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeAndCalories = (time, calories) =>{
      setTotalTime(totalTime + time)
      setTotalCalories(totalCalories + calories)
  }
  console.log(recipeQueue)
  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <section className='flex flex-col md:flex-row justify-between'>
        {/* Cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar 
        handleRemove={handleRemove} 
        recipeQueue={recipeQueue} 
        preparedRecipe={preparedRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  )
}

export default App
