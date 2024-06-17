import React from 'react';
export default function Dates({InvoiceDate, invoiceNumber}){
    return (
        <>
            <article className="mt-5 flex items-end justify-between">
            <div>
                    <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Tax invoice</h2>
                </div>
                <ul>
                    <li><span className="py-1 font-bold">Invoice Number: </span>{invoiceNumber}</li>
                    <li><span className="font-bold">Invoice date: </span>{InvoiceDate}</li>
                </ul>
            </article>
        </>
    )
}