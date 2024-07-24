import Item from "../Item/Item"


const ItemList = ({products}) => {
    return (
        <div>
            {products.map( prod => {
                return <Item key={prop.id}{...prod}/>
            })}
        </div>
    )
}

export default ItemList