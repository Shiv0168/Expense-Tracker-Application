import axios from "axios"
import IExpenseItem, { IExpenseCreateItem } from "../model/IExpenseItem"

export const getAllExpenseItem = async () => {
//    const response = await axios.get<IExpenseItem[]>("`${process.env.REACT_APP_API_BASE_URL}`")
   const response = await axios.get<IExpenseItem[]>("http://localhost:4000/items");
   return response.data;
}


export const createExpenseItem = async ( newExpenseItem : IExpenseCreateItem ) => {
      const response = await axios.post("http://localhost:4000/items" , newExpenseItem , {
         headers : { 
            "Content-Type" : "application/json"
      }
   });
      return response.data;
   }

