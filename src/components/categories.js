import React from 'react';

function Categories(props) {

    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed']

    const [tabIndex, setTabIndex] = React.useState(0)

    const selectedItem = (index) => {
        setTabIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li key={i} onClick = {() => selectedItem(i)} className = {tabIndex === i
                        ? 'active'
                        : ''}> {value}</li>
                ))}

            </ul>
        </div>
    );
}

export default Categories;