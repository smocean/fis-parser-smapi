'use strict';
var W3cAPIConverter = require('w3c-sm');
var logPath = fis.project.getProjectPath() + '/w3c-sm-change-' + (new Date()).toLocaleDateString() + '.log';

module.exports = function (content, file, conf) {
    var w3cAPIConverter = new W3cAPIConverter(),
        include = conf.include,
        result,
        logContent = (new Date()).toLocaleTimeString() + '\n',

        exclude = conf.exclude;

    if (file.isJsLike && fis.util.filter(file.subpath, include, exclude)) {
        try {
            result = w3cAPIConverter.replace(conf.patterns, content);

            if (result.isReplaced) {
                if (conf.log) {

                    logContent += file.subpath + '\n';

                    for (var k in result.loc) {
                        logContent += '\t"' + k + '" in line ';
                        for (var i = 0, loc = result.loc[k], len = loc.length; i < len; i++) {
                            logContent += '\t' + '[' + loc[i].start.line + ':' + loc[i].start.column + ']';
                        }
                    }
                    logContent += '\n';

                    fis.util.write(logPath, logContent, 'utf-8', true);
                }
                return result.content;
            }

            return content;
        } catch (e) {
            fis.log.error(file.subpath + ': ' + e.stack);
        }
    } else {
        return content;
    }
};
