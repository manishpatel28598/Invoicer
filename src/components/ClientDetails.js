import React from 'react';
export default function ({ logo }) {
  return (
    <>
      <section className="mt-5 flex flex-row">
        <div className="client-details">
          <img
            src={logo}
            alt="Client Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div>
        <h2 className="text-xl font-bold">LAXMI JWELLERS</h2>
        <p className="">
          SHIVA JI NAGAR COLONY MURARI CHOWK SAMNEGHAT LANKA VARANASI{" "}
        </p>
        <p className=""> Phone no:- 7266812249</p>
        <p className="">State :- 09-Uttar Pradesh</p>

        </div>
       
      </section>
    </>
  );
}
