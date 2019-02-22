import React, {Component, Fragment} from 'react';
import Login from '../components/login';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class MiddleWare extends Component{

    render(){
        const appDate = this.props.appData;
        const inLoggedIn = appDate['isLoggedIn'];
        return(
            <Fragment>
                <Login />
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    const appData = state.authData;
    return {
        appData
    }
}

export default connect(mapStateToProps)(MiddleWare);