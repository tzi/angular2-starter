module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        typescript: {
            base: {
                src: ['app/*.ts', 'app/components/**/*.ts'],
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'app/css/app.css': 'app/scss/app.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 9']
            },
            dist: {
                files: {
                    'app/css/app.css': 'app/css/app.css'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    livereload: 35729
                }
            }
        },
        watch: {
            options: {
                livereload: 35729
            },
            css: {
                files: ['app/scss/*.scss', 'app/scss/**/*.scss', 'app/components/**/*.scss'],
                tasks: ['css']
            },
            js: {
                files: ['app/*.ts', 'app/**/*.ts'],
                tasks: ['typescript']
            },
            app: {
                files: ['index.html', 'app/components/**/*.html'],
            }
        }
    });

    grunt.registerTask('js', ['typescript']);
    grunt.registerTask('css', ['sass', 'autoprefixer']);
    grunt.registerTask('build', ['js', 'css']);
    grunt.registerTask('server', ['build', 'connect', 'watch']);
}
;