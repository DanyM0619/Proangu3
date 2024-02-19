// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign

import {of} from 'rxjs';
import {filter} from 'rxjs/operators';
require = require("esm")(module/* , options */)
module.exports = require("./main.js")

const numObservable = of(1,2,3,4,5,6,7,8,9,10).pipe()

numObservable.pipe(
    filter(numero => numero % 2 !== 0)).subscribe(
        numero => console.log(numero)
    );