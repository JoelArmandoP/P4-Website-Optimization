module.exports = function(grunt) {

    grunt.initConfig({
	inline: {
	    dist: {
		options:{
		    cssmin: true
		},
		files: [{
		    expand: true,
		    src: ['**/*.html'],
		    cwd: 'views/',
		    dest: 'dist/views/'
		}, {
		    expand: true,
		    src: ['*.html'],
		    cwd: './',
		    dest: 'dist/'
		}]
	    }
	},
	imagemin: {
	    dist: {
    		options: {
        	    optimizationLevel: 3,
        	    progressive: true
    		},
    		files: [{
      		    expand: true,
      		    cwd: 'img/',
      		    src: ['**/*.{png,jpg,gif}'],
      		    dest: 'dist/img'
    		}, {
      		    expand: true,
      		    cwd: 'views/images/',
      		    src: ['**/*.{png,jpg,gif}'],
      		    dest: 'dist/views/images'
    		}]
	    }
	},
	uglify: {
            dist: {
		files: [{
		    expand: true,
		    src: ['*.js'],
		    cwd: 'js/',
		    dest: 'dist/js/'
		}, {
		    expand: true,
		    src: ['*.js'],
		    cwd: 'views/js/',
		    dest: 'dist/views/js/'
		}]
            }
	},
	cssmin: {
            dist: {
		files: [{
		    expand: true,
		    src: ['*.css'],
		    cwd: 'css/',
		    dest: 'dist/css/'
		}, {
		    expand: true,
		    src: ['*.css'],
		    cwd: 'views/css/',
			dest: 'dist/views/css/'
		}]
            }
	}
    });


    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['inline', 'uglify', 'cssmin', 'imagemin']);
}
