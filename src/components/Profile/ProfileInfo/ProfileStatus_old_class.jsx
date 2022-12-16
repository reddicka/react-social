import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.profileStatus
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onUpdateStatus = () => {
        this.props.getProfileStatus(this.props.userId) // НЕ РАБОТАЕТ ЕСЛИ В АДРЕСНОЙ СТРОКЕ НИЧЕГО
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.editMode &&
                    <>
                        <div>
                            <input
                                onBlur={this.toggleEditMode}
                                autoFocus={true}
                                // readOnly={true} // ПОКА ЧТО ЧТОБ НЕ РУГАЛОСЬ
                                type='text'
                                onChange={this.onStatusChange}
                                value={this.state.status}/>
                        </div>
                        {/*<button*/}
                        {/*    style={{width: '50px', height: '50px', margin: '10px'}}*/}
                        {/*    onClick={this.onUpdateStatus}*/}
                        {/*/>*/}
                    </>
                }
                {
                    !this.state.editMode &&
                    <div>
                        <span
                            onClick={this.toggleEditMode}>
                            {this.props.profileStatus || 'статуса нет'}
                        </span>
                    </div>
                }
                <button
                    style={{width: '50px', height: '50px', margin: '10px'}}
                    onClick={this.onUpdateStatus}
                />
            </>
        )
    }
}

export default ProfileStatus