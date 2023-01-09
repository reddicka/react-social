import React, {FC} from "react";
import styles from './FindUsersPage.module.css'
import User from "./User/User";
import Preloader from "../common/Proloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

type PropsType = {
    isLoading: boolean
    users: Array<UserType>

    currentPageNumber: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (page: number) => void

    follow: (userId: number) => void
    unfollow: (userId: number) => void
    authorizedUserId: number | null

    isLockedButtons: Array<number>
}

const FindUsersPage: FC<PropsType> = (props) => {
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
                                authorizedUserId={props.authorizedUserId}

                                isLockedButtons={props.isLockedButtons}
                                // setIsFollowingProgress={props.setIsFollowingProgress}
                            />)
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default FindUsersPage