module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                tasks: [
                    'shell:jekyll_serve',
                    'watch:styles'
                ],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss'
                }
            }
        },
        shell: {
            jekyll_serve: {
                command: "jekyll serve",
                options: {
                    stderr: true
                }
            },
            jekyll_build: {
                command: "jekyll build",
                options: {
                    stderr: false
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('run', ['concurrent:dev']);
    grunt.registerTask('build', [
        'sass:dist',
        'shell:jekyll_build'
    ]);

};
