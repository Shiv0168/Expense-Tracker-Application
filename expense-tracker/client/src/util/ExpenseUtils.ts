import IExpenseItems from "../model/IExpenseItem";

 export const getAllUniquePayeeNames  = (expenseItems:IExpenseItems[]) => {
    const uniquePayeeNames :string[] = [];
     expenseItems.forEach((expenseItems) => {
        const payeeName = expenseItems.payeeName;
        if(!uniquePayeeNames.includes(payeeName)){
            uniquePayeeNames.push(payeeName);
        }
     }) 
    return uniquePayeeNames;
}