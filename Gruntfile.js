'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
	port: LIVERELOAD_PORT
});

var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('breilabs_favorites.jquery.json'),

		meta: {
			banner: '/*\n' +
			' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
			' *  <%= pkg.description %>\n' +
			' *  <%= pkg.homepage %>\n' +
			' *\n' +
			' *  Made by <%= pkg.author.name %>\n' +
			' *  Under <%= pkg.licenses[0].type %> License\n' +
			' */\n'
		},

		clean: {
			server: '.tmp'
		},

		concat: {
			dist: {
				src: ['src/jquery.breilabs_dropdownmenu.js'],
				dest: 'dist/jquery.breilabs_dropdownmenu.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		jshint: {
			files: ['src/jquery.breilabs_favorites.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		uglify: {
			my_target: {
				src: ['dist/jquery.breilabs_favorites.js'],
				dest: 'dist/jquery.breilabs_favorites.min.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},

		watch: {
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'app/src/**/*.js',
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				hostname: 'localhost'
			},
			livereload: {
				options: {
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('check', ['jshint']);
	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}
		grunt.task.run([
			//'clean:server',
			//'concurrent:server',
			//'autoprefixer',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

};
