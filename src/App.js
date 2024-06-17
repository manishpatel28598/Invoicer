import { useState , useEffect} from "react";
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


  useEffect(() => {
    // Calculate the total amount whenever the list changes
    const total = list.reduce((acc, item) => {
      const itemTotal = item.Quantity * item.PricePerUnit;
      const discountAmount = itemTotal * (item.Discount / 100);
      return acc + (itemTotal - discountAmount);
    }, 0);
    setTotalAmount(total);
  }, [list]);

   // Function to generate a random unique 10-digit invoice ID
   const generateInvoiceID = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };

  useEffect(() => {
    // Generate a new invoice ID when the component mounts
    setInvoiceNumber(generateInvoiceID());
  }, []);


    const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault()


    const newItem = {
      id: uuidv4(),
      ItemName : ItemName,
      Quantity: Quantity,
      PricePerUnit: PricePerUnit,
      Discount: Discount
    };

    setList([...list, newItem])

    setItemName("")
    setQuantity("")
    setPricePerUnit("")
    setDiscount("")
    
  };

  const handleGenerateInvoice = () => {
    setShowInvoce(true);
    // Generate a new invoice ID
    setInvoiceNumber(generateInvoiceID());
  };



  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {ShowInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <Maindetails name={name} phone={phone} address={address}/>
            <ClientDetails logo = {logo}/>
            <Dates InvoiceDate={InvoiceDate} invoiceNumber={invoiceNumber}/>
            <Table 
            ItemName = {ItemName} Quantity={Quantity} PricePerUnit = {PricePerUnit} 
            Discount={Discount} Amount = {Amount} list={list} setList={setList}/>

            <section className="mt-5">
              <h2 className="text-xl font-bold">Total Amount</h2>
              <p>${totalAmount.toFixed(2)}</p>
            </section>

            <button
              onClick={() => setShowInvoce(false)}
              className="bg-blue-500 mt-5 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
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
                type="date"
                name="invoicedate"
                id="Phone"
                placeholder="Enter Current Date"
                autoComplete="off"
                value={InvoiceDate}
                onChange={(e)=> setInvoiceDate(e.target.value)}
              />

            </div>

          </article>

          <article className="md:grid grid-cols-2 gap-4 my-10">
            <div className="flex flex-col">
          <label htmlFor="ItemName">Item's Name</label>
          <input
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
          <label htmlFor="Discount">Discount(%)</label>
          <input
                type="number"
                name="Discount"
                id="Discount"
                placeholder="Discount"
                autoComplete="off"
                value={Discount}
                onChange={(e)=> setDiscount(e.target.value)}
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
