import { useEffect } from "react"

interface CardProps {
    price: number,
    title: string,
    image: string,
}

export function Card({ price, image, title } : CardProps){
    useEffect(() => {
     console.log(image);
    },
    []
    )
    return(
        <div className="flex flex-col items-center justify-center w-64 shadow-xl rounded-3xl p-5 bg-slate-300 text-black">
            <img className="rounded w-64 h-full" src={image}/>
            
            <h2 className="font-extrabold">{title}</h2>
            <p>Valor: {"R$" + price + ",00"}</p>
        </div>
    )
}