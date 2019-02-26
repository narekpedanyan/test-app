import {guestLogIn, setUser} from '../store/action-creators';
import React, {Component} from 'react';
import {connect} from "react-redux";

class GuestField extends Component{
    state = {
        userName: null,
        email: null
    };
    logInAsGuest = () => {
        if(this.state.userName !== null){
            window.localStorage.setItem('guestAccess', "Enabled");
            window.localStorage.setItem('userName', this.state.userName);
            window.localStorage.setItem('userEmail', this.state.email);
            let guestAccess = localStorage.getItem('guestAccess');
            if(guestAccess === 'Enabled') {
                this.props.dispatch(guestLogIn());
                this.props.dispatch(setUser({
                    userName: this.state.userName,
                    email: this.state.email
                }));
            }
        }
    };
    render(){
        return(
            <div className='display-flex guest-fields'>
                <div className='fields'>
                    <input type='text' placeholder='Enter user name' onChange={(event) => this.setState({ userName: event.target.value })}/>
                    <input type='text' placeholder='Enter email' onChange={(event) => this.setState({ email: event.target.value })}/>
                    <button onClick={() => this.logInAsGuest()}>Log In as Guest</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const appData = state.authData;
    return {
        appData
    }
};

export default connect(mapStateToProps)(GuestField);