import {logIn, enterGuest} from '../store/action-creators';
import GuestField from '../components/guest';
import React, {Component} from 'react';
import {connect} from "react-redux";

class Login extends Component{
    state = {
        login: null,
        password: null,
        loginSuccess: false,
        loginRejected: false
    };

    showEmail = () => {
        let rand = function() {
            return Math.random().toString(36).substr(2); // remove `0.`
        };
        let tokenGenerator = function() {
            return rand() + rand(); // to make it longer
        };
        let token = tokenGenerator();
        if(this.state.login === 'admin' && this.state.password === '123'){
            window.localStorage.setItem('access', "Enabled");
            window.localStorage.setItem('token', token);
            let loaclSt = localStorage.getItem('access');
            if(loaclSt === 'Enabled'){
                this.props.dispatch(logIn());
            }
        }else{
            this.setState({
                loginRejected: true
            });
            setTimeout(() => {
                this.setState({
                    loginRejected: false
                })
            },1000);
        }
    };

    enterAsGuest = () => {
        this.props.dispatch(enterGuest(true));
    };



    render(){
        const {guestStage} = this.props.authData;
        return(
            <div className='field-wrapper display-flex'>
                <div className='fields'>
                    <input type='text' placeholder='login...' onChange={(event) => this.setState({ login: event.target.value })}/>
                    <input type='password' placeholder='password' onChange={(event) => this.setState({ password: event.target.value })}/>
                    <button className='sign-in' onClick={() => this.showEmail()}>Log In</button>
                    {this.state.loginRejected && (
                        <div className='reject-message'>Login In unseccessfully</div>
                    )}
                    {!guestStage && <button onClick={() => this.enterAsGuest()}>Enter as Guest</button>}
                    {guestStage && <GuestField />}
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

export default connect(mapStateToProps)(Login);