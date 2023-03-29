"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(emloyee) {
        this.employees.push(emloyee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT部門 - id: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2-static", []);
        return this.instance;
    }
    describe() {
        console.log(`会計部門 - id: ${this.id}`);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee("static");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("nishi");
it.addEmployee("higashi");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "セッター";
accounting.addReport("accounting report");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Maaaaa");
accounting.describe();
