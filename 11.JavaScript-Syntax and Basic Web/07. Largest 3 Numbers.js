function solve(arr) {
    arr = arr.map(Number).sort((a, b) => b - a);

    console.log(arr[0]);
    if (arr[1] != undefined)
    console.log(arr[1]);
    if (arr[2] != undefined)
    console.log(arr[2]);
}

