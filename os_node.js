const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir();
let loadavg=os.loadavg();
let type=os.type();
let version=os.version();
let dir=os.tmpdir();
let networkInterfaces=os.networkInterfaces();
console.log(`${release} ${platform} ${arc}  ${type} ${version} ${dir}`);

