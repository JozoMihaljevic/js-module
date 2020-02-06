const axios = require('axios');

const fetchData = () => {
    console.log('doslo do tu');
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            return response.data;
        });
};

const postData = (callback, payload) => {
    console.log(payload)
    return axios
        .post('https://jsonplaceholder.typicode.com/todos', payload)
        .then(response => {
            return response;
        });
}

exports.fetchData = fetchData;
exports.postData = postData;