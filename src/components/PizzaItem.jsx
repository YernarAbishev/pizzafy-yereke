import Counter from "./Counter";

function PizzaItem(props) {
  return (
    <div className="pizza__item">
        <img src={ props.image } className="pizza__item-img" alt={ props.title } />
        <h3 className="pizza__item-title">{ props.title }</h3>
        <h4 className="pizza__item-price">{ props.price } &#x20b8;</h4>
        <Counter />
    </div>
  )
}

export default PizzaItem;
