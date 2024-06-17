import React from 'react';
export default function Header({handlePrint, handleSendEmail, handleSendWhatsApp}){
   
    return(
        <>
                <header className="flex items-end justify-end mb-5 mt-5">
                <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li><button className="bg-gray-500 text-white font-bold py-1 px-4 rounded shdow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transitio-all duration-300" onClick={handlePrint}>Print</button></li>
                        {/* <li className="mx-2"><button className="bg-blue-500 text-white font-bold py-1 px-4 rounded shdow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transitio-all duration-300" onClick={handleDownload}>Download</button></li> */}
                        {/* <li><button className="bg-green-500 text-white font-bold py-1 px-4 mx-2 rounded shdow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transitio-all duration-300" onClick={handleSendEmail}>Mail</button></li>
                        <li><button className="bg-green-500 text-white font-bold py-1 px-4 mx-2 rounded shdow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transitio-all duration-300" onClick={handleSendWhatsApp}>WhatsApp</button></li> */}

                    </ul>
                </div>

            </header>
        </>
    )
}