var t = require('./index.js');
var fs = require('fs');
var content = fs.readFileSync('./debug.js').toString();

console.log(content + '\n');
console.log(t(content, {
    isJsLike: true
}, {
    patterns: [{
        pattern: 'navigator.geolocation.getCurrentPosition',
        replacement: 'sm.getCurrentPosition'
    },
    {
        pattern: 'location.href',
        replacement: 'sm.href'

    }
    ]
}));


