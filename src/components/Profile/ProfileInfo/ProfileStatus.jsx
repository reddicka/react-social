import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        textValue: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onPutStatus = () => {
        this.props.putProfileStatus(this.state.textValue)
        this.props.getProfileStatus(this.props.userId) // НЕ РАБОТАЕТ ЕСЛИ В АДРЕСНОЙ СТРОКЕ НИЧЕГО
    }

    onStatusChange = (e) => {
        let newText = e.target.value
        this.setState({
            textValue: newText
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode &&
                    <>
                        <div>
                            <input
                                onBlur={this.activateEditMode}
                                autoFocus={true}
                                // readOnly={true} // ПОКА ЧТО ЧТОБ НЕ РУГАЛОСЬ
                                type='text'
                                onChange={this.onStatusChange}
                                value={this.state.textValue}/>
                        </div>
                        {/*<button*/}
                        {/*    style={{width: '50px', height: '50px', margin: '10px'}}*/}
                        {/*    onClick={this.onPutStatus}*/}
                        {/*/>*/}
                    </>
                }
                {
                    this.state.editMode ||
                    <div>
                        <span
                            onClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                }
                <button
                    style={{width: '50px', height: '50px', margin: '10px'}}
                    onClick={this.onPutStatus}
                />
            </>
        )
    }
}

export default ProfileStatus