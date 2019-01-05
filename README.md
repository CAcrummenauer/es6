# es6
Entendendo novos recursos do e para o JavaScript

yarn é um gerenciador de dependências...
babel faz a traspilação de códigos JavaScrip para torna-los compatíveis com versões anteriores...
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
