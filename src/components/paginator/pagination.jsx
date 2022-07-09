import React from 'react';
import styles from './pagination.module.scss'


function PaginationBlock({page, setPage, totalPage}) {

    const [portionNumber, setPortionNumber] = React.useState(1)
    const [portionSize] = React.useState(2)
    const pages = []
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(totalPage / portionSize)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize
    const onPageChange = () => {
        setPage(page)
    }

    return (
        <div className={styles.root}>
            {
                portionNumber > 0 &&
                <button className={styles.prev} onClick={() => setPortionNumber(portionNumber - 1)}> Prev </button>
            }
            {
                pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map((p) => {
                        return (
                            <span className={styles.selectedPage}
                                  key={p}
                                  onClick={() => {
                                      onPageChange(p)
                                  }}>
                            {p}
                        </span>
                        )
                    })
            }
            {
                portionCount > portionNumber &&
                <button className={styles.next} onClick={() => setPortionNumber(portionNumber + 1)}> Next </button>
            }

        </div>
    )
}

export default PaginationBlock;