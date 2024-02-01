import PizzaItem from "./PizzaItem";

const pizzas = [
    {title: "Peperoni", image: "./pizzas/peperoni.webp", price:"1700" },
    {title: "Cheese", image: "./pizzas/cheese.webp", price:"1500" },
    {title: "Chorizo", image: "./pizzas/chorizo.webp", price:"1900" },
    {title: "Pesto", image: "./pizzas/pesto.webp", price:"2700" },
    {title: "BBQ", image: "./pizzas/bbq.webp", price:"2600" },
    {title: "Ranch", image: "./pizzas/ranch.webp", price:"2800" },
    {title: "Hawaii", image: "./pizzas/hawaii.webp", price:"1900" },
    {title: "Diablo", image: "./pizzas/diablo.webp", price:"2500" },
    
]

function PizzaList() {
  return (
    <div className="pizzas">
        <div className="container">
            <h1 className="primary-title">Pizza's</h1>
            <div className="pizza__list">
                {pizzas.map((pizza, index) => (
                    <PizzaItem 
                        key={index}
                        title={pizza.title} 
                        image={pizza.image} 
                        price={pizza.price} 
                    />
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default PizzaList;
