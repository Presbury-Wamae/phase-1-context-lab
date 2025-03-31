// helpers.js
function createEmployeeRecord(employeeData) {
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
}

function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

function allWagesFor() {
    const dates = this.timeInEvents.map(event => event.date);
    return dates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
}

function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

// Export functions if needed (for Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createEmployeeRecord,
        createEmployeeRecords,
        createTimeInEvent,
        createTimeOutEvent,
        hoursWorkedOnDate,
        wagesEarnedOnDate,
        allWagesFor,
        calculatePayroll,
        findEmployeeByFirstName
    };
}