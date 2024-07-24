

const ItemDetail = ({name,img, price, category,description,stock}) => {
    return (
        <article>
            <h1>{name}</h1>
            <img src={img} style={{width:300}}/>
            <p>Category: {Category}</p>
            <p>{description}</p>
            <h2>price</h2>
            <p>{stock}</p>
        </article>
    )
}

export default ItemDetail
