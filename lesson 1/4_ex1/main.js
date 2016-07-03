var logger = require('./modules/Logger.js');
var i=1;

//tester
logger.write('notice.log',"This is notice "+ i++);
logger.write('notice.log',"This is notice "+ i++);
logger.write('error.log',"This is error "+ i++);
logger.write('error.log',"This is error "+ i++);