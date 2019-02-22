import React, {Component} from 'react';

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
        }else{
            console.log('ste')
        }
    };

    readCookie = () => {
        let loaclSt = localStorage.getItem('access');
        console.log(loaclSt, 'loaclSt')
    };



    render(){
        return(
            <div className='field-wrapper display-flex'>
                <div className='fields'>
                    <input type='text' placeholder='Enter login...' onChange={(event) => this.setState({ login: event.target.value })}/>
                    <input type='password' onChange={(event) => this.setState({ password: event.target.value })}/>
                    <button className='sign-in' onClick={() => this.showEmail()}>Log In</button>
                    {this.state.loginRejected && (
                        <div className='reject-message'>Login In unseccessfully</div>
                    )}
                    <button onClick={() => this.readCookie()}>Read Cookie</button>
                </div>
            </div>
        )
    }
}

export default Login;