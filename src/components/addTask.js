import {togglePopUp} from '../store/action-creators';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class AddTask extends Component {
    state = {
        taskText: null,
        createdSuccessFully: false
    };

    closePopUp() {
        this.props.dispatch(togglePopUp(false));
    }

    addTask() {
        if (this.state.taskText !== null) {
            const url = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Narek';
            const userName = localStorage.getItem('userName');
            const userEmail = localStorage.getItem('userEmail');
            const bodyFormData = new FormData();
            bodyFormData.set('username', userName);
            bodyFormData.set('email', userEmail);
            bodyFormData.set('text', this.state.taskText);
            const init = {
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                data: bodyFormData,
                url
            };
            return axios(init)
                .then(response => {
                    if (response.status === 200) {
                        return response.data;
                    }
                })
                .then(data => {
                    this.setState({
                        createdSuccessFully: true
                    });
                    setTimeout(() => {
                        this.setState({
                            createdSuccessFully: false
                        });
                        this.props.dispatch(togglePopUp(false));
                    }, 1000)
                })
                .catch(data => {
                    return data;
                });
        }
    }

    render() {
        return (
            <div className='popup-wrapper display-flex'>
                <div className='add-task-popup'>
                    <span className='close-p-p' onClick={() => this.closePopUp()}>x</span>
                    <textarea className='textarea'
                              onChange={(event) => this.setState({taskText: event.target.value})} placeholder="Add task..."/>
                    {this.state.createdSuccessFully && <div className='success'>Created Successfully</div>}
                    <button onClick={() => this.addTask()}>submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const tasksData = state.tasksData;
    return {
        tasksData
    }
};

export default connect(mapStateToProps)(AddTask);