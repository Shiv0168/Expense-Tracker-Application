export default interface IExpenseItems  {
    expenseDescription : string,
    payeeName : string,
    price : number,
    date : Date,
    id : number
  }
  export type IExpenseCreateItem = Omit<IExpenseItems , "id">;