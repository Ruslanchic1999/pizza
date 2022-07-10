import React from 'react';
import {setCategoryId} from "../redux/slices/filterSlice";
import {useDispatch} from "react-redux";


function Categories({categoryId}) {

    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']
    const dispatch = useDispatch()
    const onChangeCategory = (i) => {
        dispatch(setCategoryId(i))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (

                    <li
                        key={i}
                        onClick={() =>onChangeCategory(i)}
                        className={categoryId === i
                            ? 'active' : ''}>
                        {categoryName}</li>

                ))}
            </ul>

        </div>

    );

}


export default Categories;