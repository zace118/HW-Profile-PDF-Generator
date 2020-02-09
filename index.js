const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const html = require('./generateHTML');
const pdf = require('html-pdf');

function axiosCall(username, color) {
    // axios call github api using username
    axios
        .get(`https://api.github.com/users/${username}`)
        .then(function (res) {
            const username = res.data.login;

            //Axios call for the stars
            axios
                .get(`https://api.github.com/users/${username}/starred`)
                .then(function (starRes) {
                    const stars = starRes.data.length;

                    // converting html to pdf npm
                    pdf.create(html(res, color, stars)).toFile('./profile.pdf', function (err, res) {
                        if (err) return console.log('ERROR INDEX.JS LINE 24');
                        console.log('Success!!!!');
                    });
                })

        })
        .catch(function (err) {
            // console.log(err);
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
        // console.log(res);
        const username = res.username;
        const color = res.favColor;
        axiosCall(username, color);
    });
