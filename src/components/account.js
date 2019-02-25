import {logOut} from '../store/action-creators';
import React, {Component} from 'react';
import {connect} from "react-redux";

class Account extends Component{
    logout = () => {
        console.log('Logout');
        let loaclSt = localStorage.getItem('access');
        console.log(loaclSt, 'loaclSt');
        localStorage.removeItem('access');
        loaclSt = localStorage.getItem('access');
        console.log(loaclSt, 'loaclSt pti jnjvac @lni')
        this.props.dispatch(logOut());
    };
    render(){
        return(
            <div className='display-flex account-wrapper'>
                <div className='info'>
                    <p>Admin</p>
                </div>
                <div className='controls display-flex'>
                    <button onClick={() => this.logout()}>LogOut</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const appData = state.authData;
    return {
        appData
    }
}

export default connect(mapStateToProps)(Account);