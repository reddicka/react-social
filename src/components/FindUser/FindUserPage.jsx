import React from "react";
import style from './FindUserPage.module.css'
import User from "./User/User";
import Preloader from "../common/Proloader/Preloader";

const FindUserPage = (props) => {
    let pages = []
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let currentPage = props.currentPageNumber

    switch (currentPage) {
        case 1:
            pages.push(currentPage, currentPage + 1, currentPage + 2, 'заглушка', pagesCount)
            break
        case 2:
            pages.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2, 'заглушка', pagesCount)
            break
        case 3:
            pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, 'заглушка', pagesCount)
            break
        case pagesCount - 2:
            pages.push(1, 'заглушка', currentPage - 2, currentPage - 1, currentPage, currentPage + 1, pagesCount)
            break
        case pagesCount - 1:
            pages.push(1, 'заглушка', currentPage - 2, currentPage - 1, currentPage, pagesCount)
            break
        case pagesCount:
            pages.push(1, 'заглушка', currentPage - 2, currentPage - 1, currentPage)
            break
        default:
            pages.push(1, 'заглушка', currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, 'заглушка', pagesCount)
    }

    const usersList = props.users.map(user =>
        <User
            key={user.id}
            id={user.id}
            name={user.name}
            followed={user.followed}
            photos={user.photos}
            location={user.location}
            status={user.status}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    )

    return (
        <div>
            {props.isLoading
                ? <Preloader />
                : <>
                    <div className={style.pagination}>
                        {pages.map((page, index) =>
                            page === 'заглушка'
                                ? <span key={index}></span>
                                : <button
                                    key={index}
                                    onClick={() => {
                                        props.onSetPageClick(page)
                                    }}
                                    className={page === props.currentPageNumber
                                        ? style.paginationButtonActive
                                        : undefined}>
                                    {page}
                                </button>
                        )}
                    </div>

                    <ul className={style.users_list}>
                        {usersList}
                    </ul>
                </>
            }

        </div>
    )
}

export default FindUserPage