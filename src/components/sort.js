import React from 'react';
import imgCard from "../assets/img/triangle_black.png";

function Sort(props) {
    const [open, setOpen] = React.useState(false)
    const list = ['popular','price','alphabet']
    const [selected, setSelected] = React.useState(0)
    const setSelectedItem = (i) => {
        setOpen(false)
        setSelected(i)
    }
    const selectSort = list[selected]
    return (
        <>
            <div className="sort">
                <img src={imgCard} alt=""/>
                <b>Sorting on :</b>
                <span onClick={()=>setOpen(!open)}>{selectSort}</span>
            </div>
            {
                open && <div className="sort__popup">
                    <ul>
                        {
                           list.map((value, i)=>(
                               <li key={i} onClick={()=>setSelectedItem(i)}
                                   className={ selected===i ? 'active' : ''}
                               >{list[i]}</li>
                           ))
                        }
                    </ul>
                </div>
            }
        </>
    );
}

export default Sort;