function solve([input]) {
    let nums = input.split(' ');
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);
    let result = 0;

    if (num1 + num2 == num3){
        result = `${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`;
    }
    else if (num1 + num3 == num2){
        result = `${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`;
    }
    else if (num2 + num3 == num1){
        result = `${Math.min(num2, num3)} + ${Math.max(num2, num3)} = ${num1}`;
    }
    else
    {
        result = "No";
    }

    console.log(result);
}
