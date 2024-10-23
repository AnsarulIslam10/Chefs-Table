
const Sidebar = ({recipeQueue}) => {
    return (
        <div className='md:w-1/3'>
           want to cook {recipeQueue.length}
        </div>
    );
};

export default Sidebar;