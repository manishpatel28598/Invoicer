import React from 'react';
export default function Header({handlePrint}){
   
    return(
        <>
                <header className="flex items-end justify-end mb-5 mt-5">
                <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li><button className="bg-gray-500 text-white font-bold py-1 px-4 rounded shdow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transitio-all duration-300" onClick={handlePrint}>Print</button></li>
                    </ul>
                </div>

            </header>
        </>
    )
}