import React, {useState} from "react";
import {addProduct, IProduct} from "./Products.slice";
import {useAppDispatch} from "../store.hooks";


const ProdUctForm: React.FC = () => {

    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<IProduct>({
        id: "",
        title: "",
        price: 0
    })

    const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
        (prev as any)[name] = value;
        return {...prev};
    })
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(addProduct(product))
        // console.log(product)
    }
    const {title, price, id} = product

    return (<>
        <h2>add game to the stkore</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="GAme title" name='title' value={title} onChange={handleChange}/>
            <input type="number" placeholder="price" name='price' value={price} onChange={handleChange}/>
            <input type="text" placeholder="id" name='id' value={id} onChange={handleChange}/>
            <button type="submit">Add product</button>
        </form>
    </>)
}

export default ProdUctForm