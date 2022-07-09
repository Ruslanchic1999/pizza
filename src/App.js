import '../../pizza/src/scss/app.scss';
import Header from "./components/header";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/empty";

export const SearchContext = React.createContext('');

function App(props) {
    const [searchValue, setSearchValue] = React.useState('')

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </SearchContext.Provider>

            </div>
        </div>
    )
}

export default App;
