module.exports = function(grunt) {

  grunt.initConfig({
/*    responsive_images: {
      dev: {
        options: { engine: "im"},
        sizes: [{
          name: 'small',
          width: '30%',
          suffix: '_small',
          quality: 20
        },{
          name: 'large',
          width: '50%',
          suffix: '_large',
          quality: 40
        }],
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images-src/',
          dest: 'images/'
        }]
      }
    }, */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'dist/img/'
        },
        {
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images/',
          dest: 'dist/views/images/'
        },
        {
          expand: true,
          src: ['*'],
          cwd: 'css/',
          dest: 'dist/css/'
        },
        {
          expand: true,
          src: ['*'],
          cwd: 'js/',
          dest: 'dist/js/'
        }]
      }
    },
    inline: {
      dist: {
        options:{
          cssmin: true
        },
        expand: true,
        src: ['*.html'],
        cwd: './',
        dest: 'dist/'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-inline');
  grunt.registerTask('default', ['responsive_images', 'copy']);

};
