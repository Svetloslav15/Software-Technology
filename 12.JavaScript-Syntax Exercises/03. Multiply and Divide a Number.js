function solve(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    if (num2 >= num1)
    {
        console.log(num2 * num1);
    }
    else
    {
         console.log(num1 / num2);
    }
}