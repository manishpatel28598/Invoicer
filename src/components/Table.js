import {useState, useEffect} from 'react';
import './Style.css';
export default function Table({list}){


    // const [Amount, setAmount] = useState(0);
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
        // Calculate the amount whenever Quantity or PricePerUnit changes
        const calculatedAmount = (Quantity , PricePerUnit) =>{
            console.log(Quantity * PricePerUnit)
            return (Quantity * PricePerUnit);
        };
        // setAmount(calculatedAmount);
        // Calculate the total after applying the discount
        const calculatedTotal = (Quantity, PricePerUnit, Discount)=>{
            const amount = calculatedAmount(Quantity , PricePerUnit);
            return amount-(amount * Discount/100);
        // setTotal(calculatedTotal);
    };
    // [Quantity, PricePerUnit, Discount]);

    
    return (
        <>
            <table className='center-table' width="100%">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th>Item Name</th>
                        <th>Quantity(gm)</th>
                        <th>Price/Unit</th>
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
                        <td>{calculatedAmount(item.Quantity, item.PricePerUnit)}</td>
                        <td>{item.Discount}%</td>
                        <td>{calculatedTotal(item.Quantity, item.PricePerUnit, item.Discount)}</td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}