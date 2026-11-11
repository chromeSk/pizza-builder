import { useState } from "react"

function IngredientCard ({ingredient}) {
    let [isSelected, setIsSelected] = useState(false)
    function handleClick () {
        setIsSelected(!isSelected)
        console.log(isSelected);
        
    }

    return <div className="ingredient">
        <span className="ingredient__name">{ingredient.name}</span>
        <span className="ingredient__price">{ingredient.price}</span>
        <button className="btn" onClick={handleClick}>{isSelected==true ? 'Прибрати' : 'Додати'}</button>
    </div>
}

export default IngredientCard