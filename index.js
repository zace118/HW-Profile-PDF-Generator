const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

let username;

function axiosCall() {
    // axios call github api using username
    axios
        .get(`https://github.com/users/${username}`)
        .then(function (res) {
            console.log(res.data.login);
            console.log(res.data.location);

        })
        .catch(function (err) {
            console.log(err);
        })
}

inquirer
    .prompt([
        {
            type: "list",
            message: "What's your favorite color?",
            name: "favColor",
            choices: [
                'red',
                'blue',
                'green',
                'yellow',
                'pink',
                'black'
            ]
        },
        {
            type: "input",
            message: "What's your GitHub username?",
            name: "username"
        }
    ])
    .then(function (res) {
        console.log(res);
        username = res.username;
        axiosCall();
    });



    // converting html to pdf npm?

