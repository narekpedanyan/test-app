import {logOut, guestLogOut, setUser, enterGuest} from '../store/action-creators';
import React, {Component} from 'react';
import {connect} from "react-redux";

class Account extends Component{
    logout = () => {
        let loaclSt = localStorage.getItem('access');
        let guestAccess = localStorage.getItem('guestAccess');
        localStorage.removeItem('access');
        localStorage.removeItem('guestAccess');
        loaclSt = localStorage.getItem('access');
        guestAccess = localStorage.getItem('guestAccess');
        if(loaclSt === null){
            this.props.dispatch(logOut());
        }
        if(guestAccess === null){
            this.props.dispatch(guestLogOut());
            this.props.dispatch(setUser({}));
            this.props.dispatch(enterGuest(false));
        }
    };
    render(){
        const {user, isLoggedIn} = this.props.authData;
        return(
            <div className='display-flex account-wrapper'>
                <div className='info'>
                    {!!user && <div>{user['userName']}</div>}
                    {isLoggedIn && <p>Admin</p>}
                </div>
                <div className='controls display-flex'>
                    <button onClick={() => this.logout()}>LogOut</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const authData = state.authData;
    return {
        authData
    }
}

export default connect(mapStateToProps)(Account);