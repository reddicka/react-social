import React from "react";
import style from './FindUserPage.module.css'
import User from "./User/User";
import axios from "axios";
import avatar from "../../assets/img/user.png";


class FindUserPage extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsers(response.data.totalCount)
                })
        }
    }

    onSetPageClick = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    usersList = this.props.users.map(user =>
        <User
            key={user.id}
            id={user.id}
            name={user.name}
            followed={user.followed}
            photos={user.photos}
            location={user.location}
            status={user.status}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    )

    render() {
        let pages = []
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)

        let currentPage = this.props.currentPage


        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }

        // let curPF = ((currentPage - 3) < 0) ? 0 : currentPage - 3
        // let curPL = currentPage + 2
        // let slicedPages = pages.slice(curPF, curPL)
        //
        // let slicedPages2 = []
        //     slicedPages2.push(1, ...slicedPages, pagesCount)

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

        // currentPage  0 ? :
        // currentPage-2 < 0 ? :
        //
        // if (currentPage < 3) {
        //     pages.push(1, currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, pagesCount)
        // } else pages.push(1, currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, pagesCount)






        return (
            <div>
                <div className={style.pagination}>
                    {pages.map(page =>
                        page === 'заглушка' ? <span></span> :
                        <button
                            key={page}
                            onClick={ () => {this.onSetPageClick(page)} }
                            className={ page === this.props.currentPage && style.paginationButtonActive }>
                            {page}
                        </button>
                    )}
                </div>

                <ul className={style.users_list}>
                    {this.usersList}


                    {/*// Рабочий способ, но приходится не мапить юзеров, а все срать сюда*/}
                    {/*{*/}
                    {/*    this.props.users.map(user =>*/}
                    {/*        <li className={style.user_item}>*/}
                    {/*            <div className={style.user_avatar}>*/}
                    {/*                <img src={user.photos.small || avatar } alt={user.name} title={user.name} />*/}
                    {/*            </div>*/}
                    {/*            <div className={style.user_info}>*/}
                    {/*                <p className={style.user_name}>*/}
                    {/*                    {user.name}*/}
                    {/*                </p>*/}
                    {/*                <p className={style.user_location}>*/}
                    {/*                    /!*{`${user.location.country}, ${user.location.city}`}*!/*/}
                    {/*                </p>*/}
                    {/*                <p className={style.user_status}>*/}
                    {/*                    {user.status}*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className={style.user_buttons}>*/}
                    {/*                {*/}
                    {/*                    this.props.followed*/}
                    {/*                        ? <button onClick={ () => this.props.unfollow(user.id) }>unfollow</button>*/}
                    {/*                        : <button onClick={ () => this.props.follow(user.id) } >follow</button>*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*    </li>)*/}
                    {/*}*/}


                </ul>
            </div>
        )
    }
}

export default FindUserPage