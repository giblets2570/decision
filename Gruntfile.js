module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 2000,
          base: 'docs'
        }
      }
    },
    jsdoc : {
      server: {      
        title: 'Documentation',
        src: ['app.js','app/**/*.js'],
        options: {
          destination: 'docs'
        }
      }
    },
    watch: {
      jsdoc: {
        files: ['app.js','app/**/*.js'],
        tasks: ['jsdoc']
      }
    },

    env: {
      test: {
        NODE_ENV: 'test',

      },
      prod: {
        NODE_ENV: 'production'
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec',
        require: 'mocha.conf.js',
        timeout: 5000 // set default mocha spec timeout
      },
      unit: {
        src: ['app/**/*.spec.js']
      },
      integration: {
        src: ['app/**/*.integration.js']
      }
    },
  });

  // Document tasks
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Testing tasks
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-mocha-test');
  

  // Create Documentation
  grunt.registerTask('docs', [
    'jsdoc',
    'connect',
    'watch'
  ]);

  // Run Tests
  grunt.registerTask('test', [
    'env:test',
    'mochaTest'
  ]);
};