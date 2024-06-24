import React from 'react';
export default function ({ logo }) {
  return (
    <>
      <section className="flex flex-row mb-10 ">
        <div className="client-details">
          <img
            src={logo}
            alt="Client Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div>
        <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">LAXMI JWELLERS</h1>
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
