import React from 'react';
import styles from './search.module.scss'
import search from '../../assets/img/search.png'
import clear from '../../assets/img/clear.png'
import {SearchContext} from "../../App";



function Search() {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    return (
            <div className={ styles.root}>
                <img className={styles.search} src={search}/>
                <input className={styles.input} value = {searchValue}
                       onChange={(event) => setSearchValue(event.target.value)}
                       placeholder='search pizza...'/>
                {
                    searchValue && <img onClick={()=> setSearchValue('')} className={styles.clear} src={clear}/>
                }
            </div>


    )
}

export default Search;