function solve(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);

    let numberOfNegative = 0;
    if (num1 < 0){
        numberOfNegative++;
    }
    if (num2 < 0){
        numberOfNegative++;
    }
    if (num3 < 0){
        numberOfNegative++;
    }
    if (numberOfNegative % 2 === 0) {
        console.log("Positive");
    }
    else{
        console.log('Negative');
    }
}

