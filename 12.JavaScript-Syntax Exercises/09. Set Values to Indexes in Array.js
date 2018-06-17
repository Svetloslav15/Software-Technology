function solve(arr) {
    let arrSize = Number(arr[0]);

    let a = new Array(arrSize).fill(0);

    for(let obj of arr){
        let input = obj.split(" - ");
        let index = input[0];
        let value = input[1];

        a[index] = value;
    }
    console.log(a.join('\n'));
}