const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <!-- Google fonts?? -->
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <!-- Font Awesome CDN -->
        <script src="https://kit.fontawesome.com/0e13f8b113.js" crossorigin="anonymous"></script>
        <title>Document</title>
        <style>
            @page {
                margin: 0;
            }
    
            *,
            *::after,
            *::before {
                box-sizing: border-box;
            }
    
            html,
            body {
                padding: 0;
                margin: 0;
            }
    
            /* html,
            body,
            .wrapper {
                height: 95%;
            } */
    
            .wrapper {
                background-color: $ {
                    colors[data.color].wrapperBackground
                }
    
                ;
                padding-top: 100px;
            }
    
            #topWrap {
                height: 600px;
            }
    
            #bottomWrap {
                height: 135px;
            }
    
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
            }
    
            main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
            }
    
            h1 {
                font-size: 3em;
            }
    
            h2 {
                font-size: 2.5em;
            }
    
            h3 {
                font-size: 2em;
            }
    
            h4 {
                font-size: 1.5em;
            }
    
            h5 {
                font-size: 1.3em;
            }
    
            h6 {
                font-size: 1.2em;
            }
    
            .photo-header {
                position: relative;
                margin: 0 auto;
                margin-bottom: -25px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
    
                background-color:$ {
                    colors[data.color].headerBackground
                }
    
                ;
    
                color: $ {
                    colors[data.color].headerColor
                }
    
                ;
                padding: 10px;
                height: 550px;
                width: 95%;
                border-radius: 6px;
            }
    
            .photo-header img {
                width: 250px;
                height: 250px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: -75px;
    
                border: 6px solid $ {
                    colors[data.color].photoBorderColor
                }
    
                ;
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
            }
    
            .photo-header h1,
            .photo-header h2 {
                width: 100%;
                text-align: center;
            }
    
    
            .photo-header h1 {
                margin-top: 10px;
            }
    
            .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
            }
    
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
    
            .card {
                padding: 20px;
                border-radius: 6px;
                height: 175px;
                width: auto;
    
                background-color: $ {
                    colors[data.color].headerBackground
                }
    
                ;
    
                color: $ {
                    colors[data.color].headerColor
                }
    
                ;
                margin: 20px;
            }
    
            .col {
                flex: 1;
                text-align: center;
            }
    
            a,
            a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
            }
    
            @media print {
                body {
                    zoom: .75;
                }
            }
    
            .iconTitles {
                font-family: 'BioRhyme', serif;
                font-size: xx-large;
            }
        </style>
    
    <body>
        <div class="wrapper" id="topWrap">
            <div class="photo-header">
                <p><img id="prof-img" src="${res.data.avatar_url}"></img></p>
                <h1>Hello World!</h1>
                <h1>My name is ${res.data.name}!</h1>
                <!-- <div class="row"> -->
                <!-- Location icon -->
                <a href="#"><i class="fas fa-map-marker fa-4x">
                        <p class="iconTitles">${res.data.location}</p>
                    </i></a>
                <!-- Github Icon -->
                <a href="${res.data.html_url}"><i class="fab fa-github-square fa-4x">
                        <p class="iconTitles">GitHub</p class="iconTitles">
                    </i>
                </a>
                <!-- Blog icon -->
                <a href="${res.data.blog}"><i class="fas fa-rss-square fa-4x">
                        <p class="iconTitles">Blog</p>
                    </i></a>
    
                <!-- </div> -->
            </div>
        </div>
        <div class="container">
            <h2 id="bio">${res.data.bio}</h2>
            <div class='row'>
                <div class='col'>
                    <div class="card">
                        <h3>Public Repositories: ${res.data.public_repos}</h3>
                    </div>
                    <div class="card">
                        <h3>GitHub Stars: ${stars}</h3>
                    </div>
                </div>
                <div class='col'>
                    <div class="card">
                        <h3>Followers: \n${res.data.followers}</h3>
                    </div>
                    <div class="card">
                        <h3>Following: \n${res.data.following}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" id="bottomWrap"></div>
        <script src="index.js">
        </script>
    </body>`
}

module.exports = {
    generateHTML: generateHTML
}
