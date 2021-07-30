"use strict";
exports.__esModule = true;
exports.checkImage = void 0;
function validUrl(data) {
    var pattern = new RegExp('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$');
    return !!pattern.test(data);
}
function checkImage() {
    return function (control) {
        var isValid = validUrl(control.value);
        if (isValid) {
            var http = new XMLHttpRequest();
            http.open('HEAD', control.value, false);
            var fileSize = '';
            http.send(null);
            if (http.status === 200) {
                fileSize = http.getResponseHeader('content-length');
                console.log('Filesize: ' + fileSize);
            }
            if (parseInt(fileSize, 10) > 1000000) {
                return { invalidUrl: true };
            }
            else {
                console.log('not big');
                return null;
            }
        }
        return null;
    };
}
exports.checkImage = checkImage;
