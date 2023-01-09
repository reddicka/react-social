import styles from './Paginator.module.css'
import React, {FC} from "react";
import cn from 'classnames'

type PropsType = {
    currentPageNumber: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void
}

const Paginator: FC<PropsType> = ({currentPageNumber, totalUsersCount, pageSize, onPageChanged}) => {

    let pages: Array<number> = []
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    switch (currentPageNumber) {
        case 1:
            pages.push(currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, -9999, pagesCount)
            break
        case 2:
            pages.push(currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, -9999, pagesCount)
            break
        case 3:
            pages.push(currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, -9999, pagesCount)
            break
        case pagesCount - 2:
            pages.push(1, -9999, currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, pagesCount)
            break
        case pagesCount - 1:
            pages.push(1, -9999, currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, pagesCount)
            break
        case pagesCount:
            pages.push(1, -9999, currentPageNumber - 2, currentPageNumber - 1, currentPageNumber)
            break
        default:
            pages.push(1, -9999, currentPageNumber - 2, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, -9999, pagesCount)
    }

    return (
        <div className={styles.pagination}>
            {
                pages.map((page, index) =>
                    page === -9999
                        ? <span key={index}></span>
                        : <button
                            key={index}
                            onClick={() => {
                                onPageChanged(page)
                            }}
                            className={
                                cn({[styles.paginationButtonActive]: currentPageNumber === page})
                            }
                        >
                            {page}
                        </button>
                )
            }
        </div>
    )
}

export default Paginator

