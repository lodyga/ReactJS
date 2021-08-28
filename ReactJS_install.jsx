node -v
npm -v
npm install -g npm
mkdir reactApp
cd reactApp
npm init -y
npm install react react-dom --save
npm install webpack webpack-dev-server webpack-cli --save
npm install babel-core babel-loader babel-preset-env babel-preset-react babel-webpack-plugin --save-dev
touch index.html
touch App.js
touch main.js
touch webpack.config.js
touch .babelrc
npm start

jakiś błąd
internal/modules/cjs/loader.js:638
    throw err;
    ^
Error: Cannot find module 'webpack-cli/bin/config-yargs'

npm install --save-dev webpack webpack-cli webpack-dev-server
sudo apt install webpack
rm -rf node_modules package-lock.json && npm install && npm start
npm uninstall puppeteer mocha chai
npm install puppeteer mocha chai
rm -rf node_modules package-lock.json && npm install && npm start
npm install webpack-dev-server
npm install webpack-dev-server --save-dev


npm install -g create-react-app


problem
    [webpack-cli] Failed to load '/home/ukasz/Documents/Programowanie/ReactJS/reactApp/webpack.config.js' config
    [webpack-cli] { Error: Cannot find module 'html-webpack-plugin'
solution
    npm i --save-dev html-webpack-plugin

problem
    [webpack-cli] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options has an unknown property 'inline'. These properties are valid:
    module.exportsmodule.exports



problem
    sh: 1: create-react-app: Permission denied
solution
    npx create-react-app myfirstreact  



npm install -g create-react-app
create-react-app reactproject
npx create-react-app reactproject


Dobra działa przez create-react-app

To stop this from running, in the command prompt, type CTRL-C

import logo from './logo.svg';
import './App.css';




