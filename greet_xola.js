const chalk = require('chalk');
// import the greet module that is in the current folder
const greet = require('./greet');


 

 var figlet = require('figlet');
 
figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage)
});
