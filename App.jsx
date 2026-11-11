import IngredientCard from "./components/IngredientCard"
import { ingredients } from "./data/menu"

function App() {

  return (
    <>
    {ingredients.map((item) => {
      return <IngredientCard key={item.id} ingredient={item}/>
    })}

    </>
  )
}

export default App
