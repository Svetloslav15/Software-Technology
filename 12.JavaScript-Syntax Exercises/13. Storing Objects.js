function solve(args) {

    let result = [];
    for (let obj of args) {
        let input = obj.split(' -> ');
        let name = input[0];
        let age = input[1];
        let grade = input[2];

        let usernameInfo = {};
        usernameInfo['name'] = name;
        usernameInfo['age'] = age;
        usernameInfo['grade'] = grade;

        result.push(usernameInfo);
    }
    for (let item of result) {
        console.log(`Name: ${item['name']}`);
        console.log(`Age: ${item['age']}`);
        console.log(`Grade: ${item['grade']}`);
    }

}