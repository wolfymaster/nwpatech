'use strict';

const {VM} = require('vm2');
const vm = new VM();

module.exports.runtime = async event => {

    let { code, test, result } = event;

    let errors = [];
    let resp;
    let buff = new Buffer(code, 'base64');
    let codeString = buff.toString('utf8');

    try {
        resp = vm.run(codeString + test);
    } catch(err) {
        errors.push(err.message);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            success: result === resp,
            errors: errors,
          }
        ),
    };
};

/*
 sls invoke local --function hello --data '{ "code": "ZnVuY3Rpb24gZG9pdChhcnIpIHsNCiBsZXQgc3F1YXJlcyA9IGFyci5tYXAoIG0gPT4gew0KIHJldHVybiBtICogbTsNCn0pOw0KDQpyZXR1cm4gY291bnRTcXVhcmVzKHNxdWFyZXMpOw0KfQ0KDQpmdW5jdGlvbiBjb3VudFNxdWFyZXMoc3F1YXJlcykgew0KIGxldCBldmVucyA9IHNxdWFyZXMuZmlsdGVyKHMgPT4geyByZXR1cm4gcyAlIDIgPT0gMDsgfSApOw0KDQogcmV0dXJuIGV2ZW5zLmxlbmd0aDsNCn07", "test": "doit([1,2,3])", "result": 1 }'
 */