module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clientTestFile: 'client/test/**/*.js',
        serverTestFile: 'server/test/**/*.js',
        srcFile:'client/src/**/*.js',
        browserify: {
            dist: {
                files: {
                    'public/javascripts/front.js': ['client/src/front.js']
                },
                options: {
                    debug: true,
                    transform: ["partialify"]
                }
            }
        },
        watch: {
            dev:{
                files: ['<%= srcFile %>'],
                tasks: ['browserify']
            },
            test:{
                files: ['<%= clientTestFile %>', '<%= srcFile %>'],
                tasks: ['browserify', 'test']
            },
            serverTest:{
                files: ['<%= serverTestFile %>', '<%= srcFile %>'],
                tasks: ['browserify', 'serverTest']
            }
        },
        mochaTest: {
            clientTest: {
                options: {
                    reporter: 'spec'
                },
                src: ['<%= clientTestFile %>']
            },
            serverTest: {
                options: {
                    reporter: 'spec'
                },
                src: ['<%= serverTestFile %>']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', ['mochaTest:clientTest', 'watch:test']);
    grunt.registerTask('serverTest', ['mochaTest:serverTest', 'watch:serverTest']);
    grunt.registerTask('default', ['browserify', 'watch:dev']);

};
