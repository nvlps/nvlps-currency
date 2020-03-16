module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: [
        './src/**/*.js',
      ],
    },
  });

  // Load the plugin that provides the "eslint" and "terser" tasks`
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-terser');

  grunt.registerTask('default', ['eslint']);
};
