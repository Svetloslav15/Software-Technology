function solve(arr){
    let input = arr.map(JSON.parse);

    let towns = {};

    for(let entry of input){
        if (towns[entry.town] === undefined){
            towns[entry.town] = 0;
        }
        towns[entry.town] += entry.income;
    }

    let townNames = Object.keys(towns).sort();
    for(let name of townNames){
        console.log(`${name} -> ${towns[name]}`);
    }
}