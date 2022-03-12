function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    return function index(){

    }
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}
