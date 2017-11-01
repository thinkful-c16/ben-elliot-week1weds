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
    
    for (let i = 0; i < employees.length; i++) {
        let current = employees[i];
        if (current.boss) {
        console.log(current.job, current.name + ' reports to ' + current.boss); 
        } else {
        console.log(current.job, current.name + ' reports to nobody.');
        }
    }

    
    