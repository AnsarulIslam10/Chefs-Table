import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = (recipe) =>{
    // to check if the recipe already exist in the array
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }else{
      alert('Recipe already exists')
    }
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
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  )
}

export default App
