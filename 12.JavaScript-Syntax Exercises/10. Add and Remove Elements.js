function solve(args) {

    let arr = [];

    for (let obj of args) {
        let input = obj.split(' ');

        let command = input[0];
        let element = Number(input[1]);

        if (command == 'add'){
            arr.push(element);
        }
        else if (command == 'remove'){
            arr.splice(element, 1);
        }

    }


    console.log(arr.join('\n'))
}