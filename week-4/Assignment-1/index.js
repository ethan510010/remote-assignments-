function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    setTimeout(() => {
        let plusResult = n1 + n2;
        callback(plusResult);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
})