import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ProductsList from "./Products/ProductsList";
import ProdUctForm from "./Products/ProductForm";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ProductsList/>
                <ProdUctForm/>
            </div>
        </Provider>
    );
}

export default App;
