export class Transactions {
    constructor(
      public id: number,
      public description: string,
      public total: number,
      public saveDate:Date,
      public points: number
    ){}
  }
  
  export class Customer {
    constructor(
      public id: number,
      public name: string,
      public transactions: Transactions[],
      public rewardPoints: number,
      public totalPurchases: number
    ){}
  }
