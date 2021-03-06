const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//JS--------------------
mix.js("resources/js/app.js", "public/js")
    .js("resources/js/profile.js", "public/js")
    .js("resources/js/board.js", "public/js")
    .js("resources/js/ticket.js", "public/js")
    .js("resources/js/comment.js", 'public/js')
    .js("resources/js/admin.js", 'public/js');
//CSS--------------------
mix.sass("resources/sass/app.scss", "public/css")
    .sass("resources/sass/welcome.scss", "public/css")
    .sass("resources/sass/home.scss", "public/css")
    .sass("resources/sass/profile.scss", "public/css")
    .sass("resources/sass/board.scss", "public/css")
    .sass("resources/sass/admin.scss", "public/css");
