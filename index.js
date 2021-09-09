function findMatching(drivers, name) {
    let match = drivers.filter(driver => {
        return driver === name || driver === name.toLowerCase();
    });

    return match; 
}

function fuzzyMatch(drivers, letters) {
    let match = drivers.filter(driver =>{
        return driver.startsWith(letters);
    });

    return match; 
}

function matchName(drivers, name){
    let match = drivers.filter(driver => {
        return driver.name === name
    });

    return match 
}