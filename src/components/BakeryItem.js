// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    const addToCart = () => {
        const newCart = {...props.cart, [props.item.name]: props.item.name in props.cart ? {...props.item, count: props.cart[props.item.name].count+1}: {...props.item, count: 1}}
        props.handler(newCart)
        console.log(newCart)
    }
    return (
        <div>
            <img src={props.item.image}></img>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <p>${props.item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}