import React, {useEffect, useState} from "react";
import styles from './FindUsersPage.module.css'
import User from "./User/User";
import Preloader from "../common/Proloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

const FindUsersPage = (props) => {
    // const [isLoading, setIsLoading] = useState(true)
    // useEffect(() => {
    //     setIsLoading(false)
    // }, [props.users])

    return (
        <div>
            {props.isLoading
                ? <Preloader/>
                : <>
                    <Paginator currentPageNumber={props.currentPageNumber}
                               totalUsersCount={props.totalUsersCount}
                               pageSize={props.pageSize}
                               onPageChanged={props.onPageChanged}
                    />

                    <ul className={styles.users_list}>
                        {props.users.map(user =>
                            <User
                                key={user.id}
                                id={user.id}
                                name={user.name}
                                followed={user.followed}
                                photos={user.photos}
                                status={user.status}
                                follow={props.follow}
                                unfollow={props.unfollow}

                                isLockedButtons={props.isLockedButtons}
                                setIsFollowingProgress={props.setIsFollowingProgress}
                            />)
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default FindUsersPage