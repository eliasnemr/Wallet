import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


function validUrl(data: string) {
  const pattern =
  new RegExp('(http(s?):)([\\/|\\.|\\w|\\s|\\-])*\.(?:jpg|jpeg|png|gif|svg)$');

  return !!pattern.test(data);
}
export function checkImage(): ValidatorFn {
  return (control?: AbstractControl): ValidationErrors | null => {
    const isValid = validUrl(control.value);
    if (isValid) {
      const http = new XMLHttpRequest();
      http.open('HEAD', control.value, false);
      let fileSize = '';
      http.send(null);
      if (http.status === 200) {
        fileSize = http.getResponseHeader('content-length');
        console.log('Filesize: ' + fileSize);
      }
      if (parseInt(fileSize, 10) > 1000000) {
        return {invalidUrl: true};
      } else {
        console.log('not big');
        return null;
      }
    }
    return null;
  };
}
