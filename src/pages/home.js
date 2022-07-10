import React from 'react';
import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import {SearchContext} from "../App";
import PaginationBlock from "../components/paginator/pagination";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {setCurrentPage} from "../redux/slices/filterSlice";


function Home() {
debugger
    const {searchValue} = React.useContext(SearchContext);
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const { currentPage, categoryId } = useSelector((state) => state.filterSlice)
    const sort = useSelector((state) => state.filterSlice.sort.sortProperty)
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.replace('-', '')
    const order = sort.includes('-') ? 'desc' : 'asc'
    const dispatch = useDispatch()
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }
    React.useEffect(() => {
        setIsLoading(true)
    axios.get(`https://62bf288ebe8ba3a10d6501bc.mockapi.io/items?p=${currentPage}&l=4&${category}&sortBy=${sortBy}&order=${order}`)
        .then(res => {
            const items = res.data
            setItems(items)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [categoryId, sort, searchValue, currentPage])
    const pizzas = items.filter((obj) => {
        if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false
    })
        .map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))
    const skeleton = [...new Array(6)].map((_, index) =>
        <Skeleton key={index}/>)

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories  categoryId ={categoryId} />
                    <Sort />
                </div>
                <h2 className="content__title">All pizza</h2>
                <div className="content__items">
                    {
                        isLoading ? skeleton : pizzas
                    }
                </div>
                <PaginationBlock currentPage={currentPage} onChangePage = {onChangePage}/>
            </div>
        </div>
    )
}

export default Home;