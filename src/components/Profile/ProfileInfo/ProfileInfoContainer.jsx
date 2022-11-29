import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import axios from "axios";
import {setProfileInfo} from "../../../redux/profile-reducer";

class ProfileInfoContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${25}`)
            .then(response => {
                this.props.setProfileInfo(response.data)
            })

    }

    render () {
        // let contacts = this.props.profileInfo.contacts
        // let notEmptyContacts = []
        // for (let contact in contacts) {
        //     if (contacts[contact]) {
        //         notEmptyContacts.push(contact)
        //     }
        // }
        // console.log(notEmptyContacts)



        return (
            <ProfileInfo
                {...this.props.profileInfo}
                // contactsList={notEmptyContacts}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePageData.profileInfo
    }
}

export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileInfoContainer)