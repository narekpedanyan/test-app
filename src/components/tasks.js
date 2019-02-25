import React, {Component} from 'react';

class Tasks extends Component {
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        // let data = {
        //     sort_field: 'id',
        //     sort_direction: 'asc',
        //     page: 2
        // };
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        //         // 'Authorization': "Bearer " + userToken
        //     },
        //     head: JSON.stringify(data)
        // };
        // const reqUri = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=admin&sort_field =1&sort_direction =desc&page =1';
        // const reqInstance = new Request(reqUri, requestOptions);
        // return fetch(reqInstance)
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //     })
        //     .then(data => {
        //         console.log(data, 'tesnes incha')
        //         return data;
        //     }).catch((err) => console.log(err, "error111"))
    }

    render() {
        const {isLoggedIn, guestMode} = this.props;
        return (<div className='display-flex task-wrapper'>
            <div className='display-flex tasks-header'>
               <div>Tasks</div>
               <button className='add-post'>+</button>
            </div>
        </div>)
    }
}

export default Tasks;