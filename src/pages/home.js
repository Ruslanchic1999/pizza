import React from 'react';
import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import {SearchContext} from "../App";
import PaginationBlock from "../components/paginator/pagination";
import {useSelector} from 'react-redux'


function Home() {

    const {searchValue} = React.useContext(SearchContext);
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [page, setPage] = React.useState(1)
    const [totalPage] = React.useState(8)
    const {sort} = useSelector((state) => state.filterSlice)
    const categoryId = useSelector((state) => state.filterSlice.categoryId)

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc'

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62bf288ebe8ba3a10d6501bc.mockapi.io/items?
        p=${page}&l=${totalPage}&${category}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort.sortProperty, searchValue, page])
    const pizzas = items.filter((obj) => {
        if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false
    })
        .map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))
    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">All pizza</h2>
                <div className="content__items">
                    {
                        isLoading ? skeleton : pizzas
                    }
                </div>
                <PaginationBlock totalPage={totalPage} page={page} setPage={setPage}/>
            </div>
        </div>
    )
}

export default Home;