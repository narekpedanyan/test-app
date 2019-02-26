import {togglePopUp} from '../store/action-creators/index';
import AddTask from "../components/addTask";
import Tasks from '../components/tasks';
import React, {Component} from 'react';
import {connect} from "react-redux";

class TasksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            sortField: 'id',
            sortDirection: 'desc',
            pagination: null
        };
    }

    openPopUp() {
        this.props.dispatch(togglePopUp(true));
    }

    changePage = (expectedPage) => {
        if (this.state.pageNumber !== expectedPage) {
            this.setState({
                pageNumber: expectedPage
            })
        }
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const {tasksData: {tasksInfo}} = nextProps;

        if (tasksInfo && !prevState.pagination) {
            const paginationArray = [];
            const taskCount = parseInt(tasksInfo.total_task_count);
            const pageCount = Math.ceil(taskCount / 3);

            for (let i = 1; i <= pageCount; ++i) {
                paginationArray.push(i);
            }
            return {
                pagination: paginationArray
            };
        }
        return null;
    }

    filterDirection = (event) => {
        this.setState({
            sortDirection: event.target.value
        })
    };

    render() {
        const {openPopup, filterTasks} = this.props.tasksData;
        const {pagination, pageNumber, sortField, sortDirection} = this.state;

        return (<div className='display-flex task-wrapper'>
            <div className='display-flex tasks-header'>
                <select onChange={(event) => this.filterDirection(event)}>
                    <option value='desc'>desc</option>
                    <option value='asc'>asc</option>
                </select>
                <button className='add-post' onClick={() => this.openPopUp()}>+</button>
            </div>
            <Tasks
                pageNumber={pageNumber}
                sortField={sortField}
                sortDirection={sortDirection}
            />
            <div className='pagination display-flex'>
                {pagination !== null ? this.state.pagination.map((item, index) => (
                    <span key={index} onClick={() => this.changePage(item)}>{item}</span>
                )) : null}
            </div>
            {openPopup && <AddTask/>}
            {filterTasks && (<div className='filter-tasks'>
                Filter Tasks
            </div>)}
        </div>)
    }
}

const mapStateToProps = (state) => {
    const tasksData = state.tasksData;

    return {
        tasksData
    };
};

export default connect(mapStateToProps)(TasksContainer);