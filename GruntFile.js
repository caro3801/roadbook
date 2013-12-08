module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        testFile: 'test/**/*.js',
        srcFile:'src/**/*.js',
        browserify: {
            dist: {
                files: {
                    'public/javascripts/front.js': ['src/front.js']
                },
                options: {
                    debug: true
                }
            }
        },
        watch: {
            dev:{
                files: ['<%= srcFile %>'],
                tasks: ['browserify']
            },
            test:{
                files: ['<%= testFile %>', '<%= srcFile %>'],
                tasks: ['browserify', 'test']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['<%= testFile %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', ['mochaTest', 'watch:test']);
    grunt.registerTask('default', ['browserify', 'watch:dev']);

};
