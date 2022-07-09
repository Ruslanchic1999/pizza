import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

function Categories() {

    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    const  category  = useSelector((state) => state.filterSlice.categoryId)
    const dispatch = useDispatch()
const onChangeCategory = (id) =>{
    dispatch(setCategoryId(id))
}
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (

                    <li
                        key={i}
                        onClick = {(i) => onChangeCategory(i)}
                        className = {category === i
                        ? 'active' : ''}>
                        {categoryName}</li>

                ))}

            </ul>

        </div>

    );
}


export default Categories;