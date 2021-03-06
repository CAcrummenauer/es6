# es6
Entendendo novos recursos do e para o JavaScript

yarn é um gerenciador de dependências...
babel faz a traspilação de códigos JavaScript para torna-los compatíveis com versões anteriores...
yarn add @babel/cli
yarn add @babel/preset-env
yarn add @babel/core
yarn dev -> 'dev' é um script dentro de package.json:
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
}

.babelrc é um arquivo que deve conter: 
{
    "presets": ["@babel/preset-env"]
}

yarn add @babel/plugin-proposal-object-rest-spread
após o último comando, .babelrc deve conter: 
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}

Em package.json, mudar "dependencies" por "devDependencies"
yarn add webpack webpack-cli -D
yarn add babel-loader -D
após os últimos comandos, webpack.config.js deve conter:
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

O conteúdo 
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
}
do arquivo package.json é trocado por:
"scripts": {
    "dev": "webpack --mode=development -w"
}

----

yarn add webpack-dev-server
webpack.config.js;
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

package.json;
...
"scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
}
...

Reestruturação de pastas;
public
    index.html
src
    main.js

yarn add @babel/plugin-transform-async-to-generator -D
yarn add @babel/polyfill -D
.babelrc deve conter:
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"        
    ]
}
webpack.config.js deve conter:
module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

yarn add axios