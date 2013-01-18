/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: '<json:package.json>',

    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },

    watch: {
      scripts: {
        files: ['app/**/*.js', 'app/**/*.hbs'],
        tasks: ['build'],
        options: {
          interrupt: true
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          wrapped: true
        },
        files: {
          "app/lib/templates.js": "app/templates/**/*.hbs"
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "app/config.js",
          out: "public/javascript/build.js",
          name: "config"
        }
      }
    }

  });

  // Default task.
  grunt.registerTask('build', 'handlebars requirejs');

  grunt.loadNpmTasks('grunt-contrib');
};
