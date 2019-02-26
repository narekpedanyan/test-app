import React, {Component} from 'react';
import RequestService from '../service';
import {connect} from "react-redux";

class Tasks extends Component {
    componentDidMount = () => {
        const {pageNumber, sortField, sortDirection} = this.props;
        RequestService.fetchGuestData(pageNumber, sortField, sortDirection);
    };

    componentDidUpdate = (prevProps) => {
        const {pageNumber, sortField, sortDirection} = this.props;
        if (pageNumber !== prevProps.pageNumber) {
            RequestService.fetchGuestData(pageNumber, sortField, sortDirection);
        }
        if (sortDirection !== prevProps.sortDirection) {
            RequestService.fetchGuestData(pageNumber, sortField, sortDirection);
        }
    };

    render() {
        const {tasksInfo} = this.props.tasksData;

        return (<div className='tasks'>
            {tasksInfo && tasksInfo.tasks.map((item, index) => (<div className='task-row' key={index}>
                {item.text}
            </div>))}
        </div>)
    }
}

function mapStateToProps(state) {
    const tasksData = state.tasksData;
    return {
        tasksData
    }
}


export default connect(mapStateToProps)(Tasks);
