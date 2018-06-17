function solve(args) {
    let personInfo = {};

    for (let obj of args) {
        let input = obj.split(' -> ');

        if (!isNaN(input[1])){
            input[1] = Number(input[1]);
        }
        personInfo[input[0]] = input[1];
    }

    console.log(JSON.stringify(personInfo));
}