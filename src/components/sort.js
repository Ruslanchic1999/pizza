import React from 'react';
import imgCard from "../assets/img/triangle_black.png";
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../redux/slices/filterSlice";


function Sort() {

    const [open, setOpen] = React.useState(false)
    const list = [
        {name: 'по популярности (ASC)', sortProperty: 'popular'},
        {name: 'по популярности (DESC)', sortProperty: '-popular'},
        {name: 'по цене (ASC)', sortProperty: 'price'},
        {name: 'по цене (DESC)', sortProperty: '-price'},
        {name: 'по алфавиту (ASC)', sortProperty: 'alphabet'},
        {name: 'по алфавиту (DESC)', sortProperty: '-alphabet'}
    ]
    const {  sort } = useSelector((state) => state.filterSlice)
    const dispatch = useDispatch()

    const setSelectedItem = (obj) => {
        setOpen(false)
        dispatch(setSort(obj))
    }

    return (
        <>
            <div className="sort">
                <img src={imgCard} alt=""/>
                <b>Sorting on :</b>
                <span onClick={()=>setOpen(!open)}>{sort.name}</span>
            </div>
            {
                open && <div className="sort__popup">
                    <ul>
                        {
                           list.map((obj, i)=>(
                               <li key={i} onClick={()=>setSelectedItem(obj)}
                                   className={ sort===i ? 'active' : ''}
                               >{obj.name}</li>
                           ))
                        }
                    </ul>
                </div>
            }
        </>
    );
}

export default Sort;