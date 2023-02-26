const colors = require('colors');
const { blondercss } = require('blondercss');

/*
module.exports = {
    logResponse: () => {
        console.log('Blondercss installed successfully');
    }
}
*/

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