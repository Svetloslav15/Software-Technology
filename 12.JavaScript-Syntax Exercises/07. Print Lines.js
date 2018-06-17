function solve(line) {
    for(let i = 0; i <= line.length - 1; i++)
    {
        if (line[i] === 'Stop')
        {
            return;
        }
        else{
            console.log(line[i]);
        }

    }
}