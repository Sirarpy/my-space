import React from "react";
import {useSelector} from "react-redux";
import {getProductsSelector} from "./Products.slice";


const ProductList: React.FC = () => {

    const products = useSelector(getProductsSelector)
    // const removeFromStore = (id: string) => {
    //     dispatchEvent(removeProduct(id))
    // }
    return (
        <div>
            <label htmlFor="#">
                Games list
            </label>
            {products.map((product: { id: React.Key | null | undefined; title: any; price: any; }) => <div
                key={product.id}>
                <span>{`${product.title} - and  - ${product.price}`}</span>
                {/*<button onClick={removeFromStore} >remove store</button>*/}
                <button>remove store</button>
            </div>)}

        </div>
    )
}
export default ProductList