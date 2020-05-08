    /**
    * @fileoverview    :   App Main file
    */
    //NODE PACKAGES
    const http                  = require('http');

    //NPM PACKAGES
    const dotenv                = require('dotenv').config();
    const moment                = require('moment');

    //const TwitterApi            = require('./twitter/lib/accountApi.js');


    /**
    * ==========================================================================
    * @function         :   http.createServer
    * @implements       :   Create a simple server for app to run
    * ==========================================================================
    */
    let server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Twitter app message new followers is online!\n');
    });

    /**
    * ==========================================================================
    * @function         :   appMain
    * @implements       :   Main App run function
    * ==========================================================================
    */
    const appMain = async () => {

        console.log("Server started");

    }

    appMain();

    /**
    * ==========================================================================
    * @function         :   appTest
    * @implements       :   For testing
    * ==========================================================================
    */
    const appTest = async () => {


    }
    //appTest();

    /**
    * ==========================================================================
    * @function         :   server.listen
    * @implements       :   Node Server Listen
    * ==========================================================================
    */

    server.listen(5005);
