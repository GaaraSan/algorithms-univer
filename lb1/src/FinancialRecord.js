/*
	Фінансова діяльність підприємства представлена записами, що
	містять:
	– назву підприємства;
	– адресу;
	– місяць;
	– рік;
	– прибуток за даний місяць
*/

class FinancialRecord {
  constructor(name, address, month, year, profit) {
    this.name = name;
    this.address = address;
    this.month = month;
    this.year = year;
    this.profit = profit;
  }

  valueOf() {
    return this.profit;
  }

  clone() {
    return new FinancialRecord(
      this.name,
      this.address,
      this.month,
      this.year,
      this.profit,
    );
  }

  toString() {
    return `${this.profit} - ${this.name}`;
  }
}

export { FinancialRecord };
