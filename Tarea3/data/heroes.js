const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync( __dirname + '/heroes.json', 'utf-8'));

module.exports = heroes;