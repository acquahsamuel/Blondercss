#!/usr/bin/env node
const { program } = require('commander');

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)


// const options = yargs
//  .usage("Usage: -n <name>")
//  .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
//  .argv;

// const greeting = `Hello, ${options.name}!`;
// console.log(greeting, ' greeting');

// const greeting = chalk.white.bold("Blondercss!");

// const boxenOptions = {
//  padding: 1,
//  margin: 1,
//  borderStyle: "round",
//  borderColor: "green",
//  backgroundColor: "#555555"
// };
// const msgBox = boxen( greeting, boxenOptions );

// console.log(msgBox);





Package.describe({

    name : 'blonder:blondercss',
    summary : 'CSS utilities framework for rapid development and custom user designs',
    version  : '1.0.0',
    git  : 'https://github.com/acquahsamuel/Blondercss'

});



Package.onUse(function(api){
    api.versionsFrom('');
    api.use('jquery', 'client');
    let assetsLoader = [
        'dist/fonts/BentonSans-Regular.eot',
        'dist/fonts/BentonSans-Regular.svg',
        'dist/fonts/BentonSans-Regular.ttf',
        'dist/fonts/BentonSans-Regular.woff',
        'dist/fonts/BentonSans-Regular.woff2'
    ];

    if (api.addAssets) {
        api.addAssets(assetsLoader, 'client');
      } else {
        api.addFiles(assetsLoader, 'client', { isAsset: true });
    }

    api.addFiles([
        'dist/css/blonder.css',
        'dist/js/blonder.js'
    ], 'client');

})

