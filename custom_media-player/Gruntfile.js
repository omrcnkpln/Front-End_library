const { package } = require('grunt');
// const sass = require('node-sass');

module.exports = function (grunt) {

  grunt.initConfig({

    // sass: {
    //   options: {
    //     implementation: sass,
    //     sourceMap: true
    //   },
    //   dest: {
    //     files: {
    //       'src/css/main.css': 'src/scss/main.scss'
    //     }
    //   }
    // },

    // autoprefixer: {
    //   options: {
    //     browsers: ['opera 12', 'ff 15', 'chrome 25']
    //   },

    //   dist: {
    //     files: {
    //       'src/css/prefix/main.css': 'src/css/main.css',
    //     }
    //   }
    // },

    // cssmin: {
    //   build: {
    //     files: {
    //       'dest/css/main.min.css': 'src/css/prefix/*.css',
    //     }
    //   }
    // },

    // concat: {
    //   options: {
    //     separator: ';',
    //   },
    //   dist: {
    //     src: ['src/js/basic-slider.js', 'src/js/akademi-slider.js'],
    //     dest: 'src/js/bundle.js',
    //   },
    // },

    // jshint: {
    //   options: {
    //     reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
    //   },

    //   // when this task is run, lint the Gruntfile and all js files in src
    //   files: ['src/js/*.js']
    // },

    // eslint: {
    //   options: {
    //     configFile: '.eslintrc.js',
    //     // format: 'html',
    //     // outputFile: 'logs/eslintReport.html',
    //     fix: true
    //   },
    //   target: [
    //     'src/js/custom-2.js'
    //   ]
    // },

    // babel: {
    //   options: {
    //     sourceMap: true,
    //     presets: ["@babel/preset-env"],
    //   },
    //   dest: {
    //     files: {
    //       'src/js/babel/custom.js': 'src/js/custom.js',
    //     },
    //   },
    // },

    // uglify: {
    //   options: {
    //     compress: true,
    //   },
    //   dest: {
    //     files: {
    //       'dest/js/custom.min.js': 'src/js/babel/custom.js',
    //     }
    //   }
    // },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '*.html',
            '*.css',
            '*.js'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['*.css'],
        // tasks: ['sass', 'newer:autoprefixer', 'cssmin']
      }

      // js: {
      //   files: ['src/js/*.js'],
      //   // tasks: ['newer:eslint', 'newer:babel', 'newer:uglify'],
      //   // tasks: ['newer:eslint'],
      // }
    }
  })

  // LOAD GRUNT PLUGINS ========================================================
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-eslint');

  // grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-browser-sync');

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-babel');
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserSync', 'watch']);
}