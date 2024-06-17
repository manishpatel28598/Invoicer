export default function({name, phone, address}){
    return (
        <>
            <section className="flex flex-col items-end justify-end">
                <p className="font-bold  ">Bill to:- </p>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{phone}</p>
            </section>
        </>
    )
}