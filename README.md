1. folder structure: 
    - backend:
        - models
        - routers
        - server.js { main file of backend }   ==> config.js ko import karke use 
                                                                        process.env
        - config.js 
    - frontend: 
        - images
        - src
            - index.js
            - and all js files
            - config.js ==> apiUrl....
        - index.html {inside ==> main.js} ==> make when you build it and production
        - style.css
        - package.json 
                    - { dependency:    "axios": "^1.2.1",  "webpack": "^4.43.0", 
                            "webpack-cli": "^3.3.12", "webpack-dev-server": "^3.11.0}
                    - "start": "webpack-dev-server --watch-content-base --open",
                    ================
                    - when goes to production then add: 
                        "build": "webpack --mode=production --output ./main.js",
                    ================
    - .env
    
    - .babelrc >>>
            {
                "presets": [
                    [
                        "@babel/preset-env",
                        {
                            "targets":{
                                "node":"current"
                            }
                        }
                    ]
                ]
            }

// optional

    - .eslintrc.js >>>
        module.exports = {
            env: {
                browser: true,
                node: true,
                es2020: true,
            },
            extends: ['airbnb-base','prettier'],
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 11,
            },
        };


    - package.json: 
        - "start": "nodemon --watch backend --exec babel-node backend/server.js",

        - dependenci {
            "body-parser": "^1.20.1" ==> app.use(bodyParser.json()); ==> we can use 
                                        ==== req.body
            "cors": "^2.8.5",  ====> app.use(cors()); && import cors from 'cors';
            "dotenv": "^16.0.3", ==> inside config.js : 

                                    import dotenv from 'dotenv';
                                    dotenv.config();
                                     export default{
                                        MONGODB_URL: process.env.MONGODB_URL,
                                        JWT_SECRET: process.env.JWT_SECRET,
                                        PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
                                    };

            "express": "^4.18.2",
            "express-async-handler": "^1.2.0"
            "mongoose": "^6.8.0",
            }
        
        - dev-dependencies: 
                "@babel/cli": "^7.19.3", ===> for using ES6 version and using import...
                "@babel/core": "^7.20.5",
                "@babel/node": "^7.20.5",
                "@babel/preset-env": "^7.20.2",
                "eslint": "^8.29.0",  ====> for pretieer and for using compatability 
                                         "it is optional"

                "eslint-config-airbnb-base": "^15.0.0",
                "eslint-config-prettier": "^8.5.0",
                "eslint-plugin-import": "^2.26.0",
                "nodemon": "^2.0.20"





================================= AT THE END ==============================
// also have to make the upload as static file: 
app.use('/images',express.static(path.join(__dirname,'../images')));

/// make frontend folder to static :
app.use(express.static(path.join(__dirname,'/../frontend')));
// also make the index.html as starting file: 
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'/../frontend/index.html'));
});
============================================================================
in backend: 

in pakage.json: 

"engines": {
    "node": "12.4.0",
    "npm": "6.9.0"
  }


  "start": "node dist/server.js",
  "build": "rm -rf dest && babel backend -d dist",  ==> when goes to production...

============================================================================

