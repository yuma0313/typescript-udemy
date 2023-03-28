abstract class Department {
  static fiscalYear: number = 2020;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  //readonlyをつけることで代入できなくする
  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(emloyee: string) {
    this.employees.push(emloyee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT部門 - id: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //ゲッター
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  //セッター
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      //staticメソッドでのthisはクラスのstaticプロパティを指す
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2-static", []);
    return this.instance;
  }

  describe() {
    console.log(`会計部門 - id: ${this.id}`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

//staticをログで出力
const employee1 = Department.createEmployee("static");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("nishi");
it.addEmployee("higashi");
it.describe();
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "セッター";
accounting.addReport("accounting report");
console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Maaaaa");

// accounting.printEmployeeInformation();

accounting.describe();
