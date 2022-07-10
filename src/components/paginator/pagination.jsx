import React from 'react';
import styles from './pagination.module.scss'
import ReactPaginate from 'react-paginate'

function PaginationBlock({ onChangePage}) {

    return (

            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage( event.selected + 1)}
                pageCount={4}
                pageRangeDisplayed={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />

    )
}

export default PaginationBlock;