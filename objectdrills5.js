const employees = [ 
    {
        name: "Joe",
        job: "plumber",
        boss: "king"
    }, 
    {
        name: "Bob",
        job: "baker",
        boss: "queen"
    }, 
    {
        name: "Carl",
        job: "cook",
        boss: "king"
    }, 
    {
        name: "Gerald",
        job: "janitor",
        boss: "queen"
    }, 
    {
        name: "Paul",
        job: "gutter cleaner"
    } 
    ];
    
    for (let i = 0; i < employees.length - 1; i++) {
        let current = employees[i];
        console.log(current.job, current.name + ' reports to ' + current.boss);
        
    }
    console.log(employees[4].job, employees[4].name + ' reports to nobody.');