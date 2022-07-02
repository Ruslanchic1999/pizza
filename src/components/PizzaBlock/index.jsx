import React, {useState} from 'react';
import imgPlus from '../../assets/img/plusAdd.png';

function PizzaBlock(props) {

    const typeNames = ['thin', 'tradition']
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={props.imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{props.name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {props.types.map((typeId) => (
                            <li key={typeId} onClick={() => setActiveType(typeId)}
                                className={activeType === typeId ? 'active' : ''}>
                                {typeNames[typeId]} </li>))
                        }
                    </ul>
                    <ul>
                        {props.sizes.map((size, i) => (
                            <li key={i} className={activeSize === i ? 'active' : ''}
                                onClick={() => setActiveSize(i)}>
                                {size} cm.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{props.price}</div>
                    <div className="button button--outline button--add">
                        <img src={imgPlus} alt=""/>
                        <span>Add</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaBlock;