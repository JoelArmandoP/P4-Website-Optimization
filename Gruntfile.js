module.exports = function(grunt) {

    grunt.initConfig({
	inline: {
	    dist: {
		options:{
		    cssmin: true
		},
		files: [
		    {
			expand: true,
			src: ['**/*.html'],
			cwd: './',
			dest: 'dist/'
		    }]
	    }
	},
	imagemin: {
            dist: {
		options: {
		    optimizationLevel: 7
		},
		files: [
		    {
			expand: true,
			src: ['**/*.{png,jpg,gif}'],
			cwd: 'img/',
			dest: 'dist/img/'
		    }, {
			expand: true,
			src: ['**/*.{png,jpg,gif}'],
			cwd: 'views/images/',
			dest: 'dist/views/images/'
		    }]
            }
	},
	uglify: {
            dist: {
		files: [
		    {
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
		files: [
		    {
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
