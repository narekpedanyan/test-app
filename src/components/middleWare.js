import {logIn, guestLogIn, setUser} from '../store/action-creators';
import TasksContainer from '../containers/tasks-container';
import React, {Component, Fragment} from 'react';
import Account from '../components/account';
import Login from '../components/login';
import {connect} from "react-redux";

class MiddleWare extends Component{
    constructor(props){
        super(props);
        this.checkStorage = this.checkStorage.bind(this);
    }

    componentWillMount() {
        this.checkStorage();
    }

    checkStorage(){
        let loaclSt = localStorage.getItem('access');
        let guestAccess = localStorage.getItem('guestAccess');
        let user = localStorage.getItem('userName');
        let userEmail = localStorage.getItem('userEmail');
        if(loaclSt === 'Enabled'){
            this.props.dispatch(logIn());
        }
        if(guestAccess === 'Enabled') {
            this.props.dispatch(guestLogIn());
            this.props.dispatch(setUser({
                userName: user,
                email: userEmail
            }))
        }
    }

    render(){
        const authData = this.props.authData;
        const isLoggedIn = authData['isLoggedIn'];
        const guestMode = authData['guest'];
        return(
            <Fragment>
                {isLoggedIn && <Account
                    isLoggedIn={true}
                    guest={false}
                />}
                {guestMode && <Account
                    isLoggedIn={false}
                    guest={true}
                />}
                {(!isLoggedIn && !guestMode) && <Login />}
                {isLoggedIn && <TasksContainer
                    isLoggedIn={true}
                    guestMode={false}
                />}
                {guestMode && <TasksContainer
                    isLoggedIn={false}
                    guestMode={true}
                />}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const authData = state.authData;
    return {
        authData
    }
};

export default connect(mapStateToProps)(MiddleWare);