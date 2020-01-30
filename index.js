const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

// let username;

// async function doStuff() {
//     try {
//         const { prompt } = await inquirer.prompt([
//             {
//                 type: "list",
//                 message: "What's your favorite color?",
//                 name: "favColor",
//                 choices: [
//                     'red',
//                     'blue',
//                     'green',
//                     'yellow',
//                     'pink',
//                     'black'
//                 ]
//             },
//             {
//                 type: "input",
//                 message: "What's your GitHub username?",
//                 name: "username"
//             }
//         ]);

//         console.log(prompt);

//         // axios call github api using username
//         // const { data } = await axios.get(
//         //     `https://api.github.com/search/users?q=${username}`
//         // );
//         // console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// doStuff();


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
        const username = res.username;
        // axios call github api using username
        axios
            .get(`https://api.github.com/search/users?q=${username}`)
            .then(function (res) {
                console.log(res);
            })
    });


    // converting html to pdf npm?

