import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


export interface IProduct {
    title: string
    price: number
    id: string
}

const initialState: IProduct[] = [
    {title: "blya", price: 60, id: "bl"},
    {title: "hunt", price: 50, id: "hu"},
    {title: "hello", price: 70, id: "he"}
]

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        //sa formayica galu
        addProduct: (state, action: PayloadAction<IProduct>) => {
                    // sa productna gcum enq state i mej
            return [action.payload, ...state]
        }
    }
})


export const {addProduct} = ProductsSlice.actions;

export  const getProductsSelector = (state: RootState)=> state.products;

export default ProductsSlice.reducer;
