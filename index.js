/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// payroll.js

class Payroll {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculatePay(employeeId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) throw new Error("Employee not found");
        
        return employee.hourlyRate * employee.hoursWorked;
    }

    totalPayroll() {
        return this.employees.reduce((total, emp) => total + (emp.hourlyRate * emp.hoursWorked), 0);
    }

    generatePayslip(employeeId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) throw new Error("Employee not found");
        
        return `Payslip for ${employee.name}: \nHours Worked: ${employee.hoursWorked}\nHourly Rate: $${employee.hourlyRate}\nTotal Pay: $${this.calculatePay(employeeId)}`;
    }
}

module.exports = Payroll;


