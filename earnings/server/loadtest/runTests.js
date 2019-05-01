var exec = require('child_process').exec, child;

child = exec('ab -c 50 -n 99999 -t 60000 -k -r http://127.0.0.1:3002/api/earnings/T',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
child();

//  https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript