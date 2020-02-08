const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const html = require('./generateHTML');
const pdf = require('html-pdf');

function axiosCall(username, color) {
    // axios call github api using username ------ https://github.com/users/${username}
    axios
        .get(`https://api.github.com/users/${username}`)
        .then(function (res) {
            // console.log(res);
            const username = res.data.login,
                stars = 'ruh roh, spaghetti-o\'s';
            // "/user/watched" will have the list of repos the user has starred
            // converting html to pdf npm?
            pdf.create(html(res, color)).toFile('./profile.pdf', function (err, res) {
                if (err) return console.log(err);
                console.log(res);
            });
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
                'pink'
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
        const username = res.username;
        const color = res.favColor;
        axiosCall(username, color);
    });




