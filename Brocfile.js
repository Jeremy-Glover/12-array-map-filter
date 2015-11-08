var Merge = require('broccoli-merge-trees');

var stylePaths = [
    'sass',
    'bower_components/normalize-css',
    'bower_components/font-awesome/scss',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/neat/app/assets/stylesheets',
  ];

var Sass = require('broccoli-sass');

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge(['public', styles], { overwrite: true });
