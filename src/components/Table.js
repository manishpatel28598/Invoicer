import {useState, useEffect} from 'react';
import './Style.css';
export default function Table({list}){


    
        const calculatedAmount = (Quantity , PricePerUnit, MakingCost) =>{
            console.log(Quantity * PricePerUnit)
            let amnt = Quantity * PricePerUnit;
            console.log(typeof MakingCost)
            let makingCost = parseInt(MakingCost);
            return (amnt+(amnt*makingCost/100));
        };
        
        // Calculate the total after applying the discount
        const calculatedTotal = (Quantity, PricePerUnit, Discount, MakingCost)=>{
            const amount = calculatedAmount(Quantity , PricePerUnit, MakingCost);
            return amount-Discount;
       
    };
   

    
    return (
        <>
            <table className='center-table' width="100%">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th>Item Name</th>
                        <th>Quantity(gm)</th>
                        <th>Price/Unit</th>
                        <th>Making Cost(%)</th>
                        <th>Amount</th>
                        <th>Discount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item =>(
                    <tr key={item.id} className="ps-2">
                        <td className='ps-5'>{item.ItemName}</td>
                        <td>{item.Quantity}</td>
                        <td>{item.PricePerUnit}</td>
                        <td>{item.MakingCost}%</td>
                        <td>{calculatedAmount(item.Quantity, item.PricePerUnit, item.MakingCost)}</td>
                        <td className='font-bold'>{item.Discount}</td>
                        <td>{calculatedTotal(item.Quantity, item.PricePerUnit, item.Discount, item.MakingCost)}</td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}