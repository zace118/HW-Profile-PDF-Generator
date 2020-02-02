const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const html = require('./generateHTML');

let username;

function axiosCall() {
    // axios call github api using username ------ https://github.com/users/${username}
    axios
        .get(`https://api.github.com/users/${username}`)
        .then(function (res) {
            // console.log(res);
            const username = res.data.login,
                profileImg = res.data.url,
                location = res.data.location,
                githubLink = res.data.html_url,
                userBio = res.data.bio,
                pubRepos = res.data.public_repos,
                followers = res.data.followers,
                stars = 'ruh roh, spaghetti-o\'s',
                // "/user/watched" will have the list of repos the user has starred
                following = res.data.following;

            // console.log(username);
            // console.log(profileImg);
            // console.log(location);
            // console.log(githubLink);
            // console.log(userBio);
            // console.log(pubRepos);
            // console.log(followers);
            // console.log(stars);
            // console.log(following);

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
        username = res.username;
        axiosCall();
    });



    // converting html to pdf npm?

