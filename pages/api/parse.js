let vm = require('vm');

const testone = () => {
    return add(1,2) === 3;
};

const testtwo = () => {
    return add(2,4) === 6;
};

export default (req, res) => {
    let body = JSON.parse(req.body);
    let program = body.payload || "function add() { return false }";

    vm.runInThisContext(program);

    let testsPassed = {};

    testsPassed['TestOne'] = testone();
    testsPassed['TestTwo'] = testtwo();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(testsPassed))
}
