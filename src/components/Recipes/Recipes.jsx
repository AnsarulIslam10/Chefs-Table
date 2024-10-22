import { useEffect, useState } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className='md:w-2/3'>
            recipe cards {recipes.length}
        </div>
    );
};

export default Recipes;