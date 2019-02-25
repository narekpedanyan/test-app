import React, {Component, Fragment} from 'react';
import {logIn} from '../store/action-creators';
import Account from '../components/account';
import Tasks from '../components/tasks';
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
        if(loaclSt === 'Enabled'){
            this.props.dispatch(logIn());
        }
    }

    render(){
        const authData = this.props.authData;
        const isLoggedIn = authData['isLoggedIn'];
        const guestMode = authData['guest'];
        return(
            <Fragment>
                {isLoggedIn && <Account />}
                {!isLoggedIn && <Login />}
                {isLoggedIn && <Tasks
                    isLoggedIn={true}
                    guestMode={false}
                />}
                {guestMode && <Tasks
                    isLoggedIn={false}
                    guestMode={true}
                />}
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    const authData = state.authData;
    return {
        authData
    }
}

export default connect(mapStateToProps)(MiddleWare);