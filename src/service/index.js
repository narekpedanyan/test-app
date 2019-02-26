import {updateTasks} from "../store/action-creators";
import store from '../store';

const RequestService = {};

RequestService.fetchGuestData = (pageNumber, sortField, sortDirection) => {
    const sort_f = sortField;
    const sort_d = sortDirection;
    const page_n = pageNumber;
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    };
    const reqUri = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Narek&sort_field=' + sort_f + '&sort_direction=' + sort_d + '&page=' + page_n;
    const reqInstance = new Request(reqUri, requestOptions);
    return fetch(reqInstance)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            let tasks = data.message;
            store.dispatch(updateTasks(tasks));
            return data;
        }).catch((err) => console.log(err, "error111"))
};

export default RequestService;