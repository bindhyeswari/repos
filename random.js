function generateRandom(callback) {
    var randomInterval = Math.floor(Math.random() * 1000);
    setTimeout(function () {
        console.log(randomInterval);
        callback(null, randomInterval); // first input is the error, second is the result
    }, randomInterval)
}