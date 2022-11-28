import React from "react";
import style from './FindUserPage.module.css'
import User from "./User/User";

const FindUserPage = (props) => {
    let pages = []
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize)

    let currentPage = props.currentPage

    switch (currentPage) {
        case 1:
            pages.push(currentPage, currentPage+1, currentPage+2, 'заглушка',pagesCount)
            break
        case 2:
            pages.push(currentPage-1, currentPage, currentPage+1, currentPage+2, 'заглушка',pagesCount)
            break
        case 3:
            pages.push(currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, 'заглушка',pagesCount)
            break
        case pagesCount-2:
            pages.push(1, 'заглушка',currentPage-2, currentPage-1, currentPage, currentPage+1, pagesCount)
            break
        case pagesCount-1:
            pages.push(1, 'заглушка',currentPage-2, currentPage-1, currentPage, pagesCount)
            break
        case pagesCount:
            pages.push(1, 'заглушка',currentPage-2, currentPage-1, currentPage)
            break
        default:
            pages.push(1, 'заглушка', currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, 'заглушка', pagesCount)
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
            <div className={style.pagination}>
                {pages.map(page =>
                    page === 'заглушка' ? <span></span> :
                        <button
                            key={page}
                            onClick={ () => {props.onSetPageClick(page)} }
                            className={ page === props.currentPage && style.paginationButtonActive }>
                            {page}
                        </button>
                )}
            </div>

            <ul className={style.users_list}>
                {usersList}
            </ul>
        </div>
    )
}

export default FindUserPage