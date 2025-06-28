import style from './styles/pizza-style.module.css'

export default function Pizza({ pizzaObject, onDelete }) {  // Add onDelete to destructured props
    return(
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"]:" "}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients} </p>
                <p>{pizzaObject.price}</p>
                <button onClick={() => onDelete(pizzaObject.name)}>Delete pizza 🍕</button>
            </div>
        </li>
    )
}

{/*comentario de prueba*/}