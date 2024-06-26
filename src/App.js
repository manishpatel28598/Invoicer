import { useState , useEffect, useRef} from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Maindetails from "./components/Maindetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import logo from "./components/logo1.png";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [ShowInvoice, setShowInvoce] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("")
  const [list, setList] = useState([])
  const [phone, setPhone] = useState("")
  const [InvoiceDate, setInvoiceDate] = useState("")
  const [ItemName, setItemName] = useState("")
  const [Quantity, setQuantity] = useState("")
  const [PricePerUnit, setPricePerUnit] = useState("")
  const [Discount, setDiscount] = useState("")
  const [Amount, setAmount] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [totalAmount, setTotalAmount] = useState(0)
  const [MakingCost, setMakingCost] = useState()
  const invoiceRef = useRef(null); // Ref to the invoice container
  const [showbtn, setShowbtn] = useState(true)
  const [recieved, setRecieved] = useState()
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // Calculate the total amount whenever the list changes
    const total = list.reduce((acc, item) => {
      const amnt = item.Quantity * item.PricePerUnit;
      // console.log(amnt)
      const makingcostamnt = amnt + (amnt*item.MakingCost/100);
      // console.log(makingcostamnt)
      const discountTotal = makingcostamnt - Discount;
      // console.log("total"+discountTotal)
      return acc + discountTotal-item.Discount;
    }, 0);
    setTotalAmount(total);
    setBalance(total-recieved)
  }, [list]);

  //  Function to generate a random unique 10-digit invoice ID
  //  const generateInvoiceID = () => {
  //   return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  // };

  useEffect(() => {
    // Generate a new invoice ID when the component mounts
    setInvoiceNumber();
  }, []);


    const handlePrint = () => {
    window.print();
    setShowbtn(false);
  };


  // useEffect(() => {
  //   // Generate a new invoice ID when the component mounts
  //   setInvoiceNumber(generateInvoiceID());
  // }, []);
  
  // useEffect(()=>{
    
  //   console.log(totalAmount+" and "+recieved +" and "+balance);
  // },[totalAmount, recieved])
  
  const handleSubmit = (e) => {
    e.preventDefault()


    const newItem = {
      id: uuidv4(),
      ItemName : ItemName,
      Quantity: Quantity,
      PricePerUnit: PricePerUnit,
      MakingCost: MakingCost,
      Discount: Discount
    };

    setList([...list, newItem])

    setItemName("")
    setQuantity("")
    setPricePerUnit("")
    setMakingCost("")
    setDiscount("")
    
  };



  // const handleGenerateInvoice = () => {
  //   setShowInvoce(true);
  //   // Generate a new invoice ID
  //   setInvoiceNumber(generateInvoiceID());
  // };



  useEffect(() => {
    console.log(list);
  }, [list]);
 
  return (
    <>
      <main className="m-0 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {ShowInvoice ? (
          <div ref={invoiceRef} id="invoice">
            <div>
            <Dates InvoiceDate={InvoiceDate} invoiceNumber={invoiceNumber}/>

            </div>
            <Header handlePrint={handlePrint}/>
            <Maindetails name={name} phone={phone} address={address}/>
            <ClientDetails logo = {logo}/>
            <Table 
            ItemName = {ItemName} Quantity={Quantity} PricePerUnit = {PricePerUnit} 
            Discount={Discount} Amount = {Amount} list={list} setList={setList} MakingCost ={MakingCost}/>

            <section className="mt-5 flex flex-row justify-between">
              <div>
              <h2 className="text-xl font-bold">Total Amount</h2>
              <p>₹{totalAmount.toFixed(2)}</p>
              </div>
              <div>
                <span><h5 className="text-sm font-bold">Recieved Amount:</h5><p>₹{recieved}</p></span>
                <span><h5 className="text-sm font-bold">Balanced amount:</h5><p>₹{balance.toFixed(2)}</p></span>
              </div>
            </section>
            <div>
              Authorised Signatory
              <div className="h-8">

              </div>
              </div>

            <div className="border-solid border-2 border-#f0f0f0-800 w mb-5 mt-2"></div>
            <div className="text-center font-bold">THANKYOU, VISIT AGAIN</div>
            <button
              onClick={() => setShowInvoce(false)}
              className="bg-transparent mt-5 text-blue-500 py-1 px-4 rounded shadow border-1 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
          <form action="#" onSubmit={handleSubmit}>

          <div className="flex flex-col justify-center ">
          <article className="md:grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="name">Customer Name</label>
              <input
                className="px-5"
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name "
                autoComplete="off"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Customer Address</label>
              <input
                className="px-5"
                type="text"
                name="text"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
            <label htmlFor="Phone">Customer Phone</label>
              <input
                className="px-5"
                type="text"
                name="text"
                id="Phone"
                placeholder="Enter your Phone"
                autoComplete="off"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
              />
              </div>
            <div className="flex flex-col">
            <label htmlFor="Date">Invoice Date</label>
              <input
                className="px-5"
                type="date"
                name="invoicedate"
                id="Phone"
                placeholder="Enter Current Date"
                autoComplete="off"
                value={InvoiceDate}
                onChange={(e)=> setInvoiceDate(e.target.value)}
              />

            </div>
            <div className="flex flex-col">
            <label htmlFor="InvoiceNumber">Invoice Number</label>
              <input
                className="px-5"
                type="Number"
                name="InvoiceNumber"
                id="InvoiceNumber"
                placeholder="Enter Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e)=> setInvoiceNumber(e.target.value)}
              />

            </div>

          </article>

          <article className="md:grid grid-cols-2 gap-4 my-10">
            <div className="flex flex-col">
          <label htmlFor="ItemName">Item's Name</label>
          <input
                className="px-5"
                type="text"
                name="text"
                id="ItemName"
                placeholder="Items Name"
                autoComplete="off"
                value={ItemName}
                onChange={(e)=> setItemName(e.target.value)}
              />
            
            </div>


          <div className="flex flex-col">
          <label htmlFor="Quantity">Quantity(gm)</label>
          <input
                className="px-5"
                type="number"
                name="Quantity"
                id="Quantity"
                placeholder="Quantity"
                autoComplete="off"
                value={Quantity}
                onChange={(e)=> setQuantity(e.target.value)}
              />
            </div>

          <div className="flex flex-col">
          <label htmlFor="PricePerUnit">Rate</label>
          <input
                className="px-5"
                type="number"
                name="Rate"
                id="PricePerUnit"
                placeholder="Price/Unit"
                autoComplete="off"
                value={PricePerUnit}
                onChange={(e)=> setPricePerUnit(e.target.value)}
              />
            </div>

          <div className="flex flex-col">
          <label htmlFor="MakingCost">Making cost(%)</label>
          <input
                className="px-5"
                type="number"
                name="Making cost"
                id="MakingCost"
                placeholder="Making cost"
                autoComplete="off"
                value={MakingCost}
                onChange={(e)=> setMakingCost(e.target.value)}
              />
            </div>


            <div className="flex flex-col">
          <label htmlFor="Discount">Discount</label>
          <input
                className="px-5"
                type="number"
                name="Discount"
                id="Discount"
                placeholder="Discount"
                autoComplete="off"
                value={Discount}
                onChange={(e)=> setDiscount(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
          <label htmlFor="PricePerUnit">Recieved Amount</label>
          <input
                className="px-5"
                type="number"
                name="Rate"
                id="RecievedAmount"
                placeholder="Enter recieved Amount"
                autoComplete="off"
                value={recieved}
                onChange={(e)=> setRecieved(e.target.value)}
              />
            </div>
          </article>

            <button type="submit"
            className="mb-5 bg-blue-500 text-white my-1 py-2 px-8 rounded 
            shadow border-2 border-blue-500 hover:bg-transparent 
            hover:text-blue-500 transition-all duration-300"
            >
              Add Item
            </button>
              
              <button
                onClick={() => setShowInvoce(true)}
                className="bg-blue-500 text-white py-2 px-8 rounded 
                shadow border-2 border-blue-500 hover:bg-transparent 
                hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>

          </form>
          </>
        )}
      </main>
    </>
  );
}

export default App;
