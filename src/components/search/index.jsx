import React from 'react';
import styles from './search.module.scss'
import search from '../../assets/img/search.png'
import clear from '../../assets/img/clear.png'
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce'


function Search() {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef()
    const { setSearchValue } = React.useContext(SearchContext);

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 2000), []
    )

    const onChangeInput = (event) =>{
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <img className={styles.search} src={search}/>
            <input
                ref={inputRef}
                className={styles.input} value={value}
                onChange={onChangeInput}
                placeholder='search pizza...'/>
            {
                value && <img onClick={onClickClear} className={styles.clear} src={clear}/>
            }
        </div>


    )
}

export default Search;