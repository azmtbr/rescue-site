module.exports = function(grunt) {

    grunt.registerTask( 'default', [ 'clean', 'copy', 'hapi', 'watch'] );

    grunt.registerTask( 'build', [ 'clean', 'copy' ] );

    grunt.registerTask( 'run', [ 'hapi', 'watch' ]);

    grunt.initConfig({

        watch: {
            hapi: {
                files: [
                    './app/assets/**/*.{png,jpg,jpeg,mp3}',
                    './app/scripts/**/*.js',
                    './app/styles/**/*.css',
                    './app/pages/**/*.html',
                    './app/templates/**/*.html',
                    'Gruntfile.js'
                ],
                tasks: [
                    'clean',
                    'copy'
                ],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            options: {
              noProcess: ['**/*.{png,gif,jpg,ico,psd}'],
              process: function(content, srcpath){
                if (!srcpath.match(/\.js$/)) {return content;}

                if (process.env.RESCUE_ID === undefined || process.env.RESCUE_ID === "") {
                  grunt.log.error("RESCUE_ID was not specified!")
                  throw new Exception("RESCUE_ID not specified!");
                }
                return content.replace(/\$RESCUE_ID/g, process.env.RESCUE_ID);
              }
            },
            dist: {
                files: [{
                    expand: true,
                    src: [ './assets/**/*.{png,jpg,jpeg,mp3}' ],
                    dest: './dist',
                    cwd: './app'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist',
                    cwd: './app/pages'
                }, {
                    expand: true,
                    src: [ './**/*.css' ],
                    dest: './dist/styles',
                    cwd: './app/styles'
                }, {
                    expand: true,
                    src: [ './**/*.js' ],
                    dest: './dist/scripts',
                    cwd: './app/scripts'
                }, {
                    expand: true,
                    src: [ './**/*.html' ],
                    dest: './dist/templates',
                    cwd: './app/templates'
                }]
            }
        },

        hapi: {
            custom_options: {
                options: {
                    server: require('path').resolve('./server'),
                    bases: {
                        '/dist': require('path').resolve('./dist/')
                    }
                }
            }
        },

        clean: ['./dist']
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');

};
