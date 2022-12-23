import styles from './Paginator.module.css'
import React from "react";

const Paginator = ({currentPageNumber, pagesCount, onSetPageClick}) => {

    let pages = []

    switch (currentPageNumber) {
        case 1:
            pages.push(currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, 'заглушка', pagesCount)
            break
        case 2:
            pages.push(currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, 'заглушка', pagesCount)
            break
        case 3:
            pages.push(currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, 'заглушка', pagesCount)
            break
        case pagesCount - 2:
            pages.push(1, 'заглушка', currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, pagesCount)
            break
        case pagesCount - 1:
            pages.push(1, 'заглушка', currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, pagesCount)
            break
        case pagesCount:
            pages.push(1, 'заглушка', currentPageNumber - 2, currentPageNumber - 1, currentPageNumber)
            break
        default:
            pages.push(1, 'заглушка', currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, 'заглушка', pagesCount)
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) =>
                page === 'заглушка'
                    ? <span key={index}></span>
                    : <button
                        key={index}
                        onClick={() => {
                            onSetPageClick(page)
                        }}
                        className={page === currentPageNumber
                            ? styles.paginationButtonActive
                            : undefined}>
                        {page}
                    </button>
            )}
        </div>
    )
}

export default Paginator

