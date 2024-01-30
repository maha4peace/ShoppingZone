function Product({item, cart, setCart}) {
    return (
        <li> {item.name} <button onClick={() => {
           setCart([...cart, item])
            
            // const tempArr = cart
            // tempArr.push(item)
            // setCart(tempArr) 
          }}> Add to Cart </button> </li>
    )
}

export default Product ;