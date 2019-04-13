module.exports = function(grunt){
 grunt.registerTask('speak', function(){
  console.log("Im Speaking");
 })
}

grunt.loadNpmTasks('grunt-s3');

