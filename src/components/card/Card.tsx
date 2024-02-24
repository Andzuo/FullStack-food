
interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title } : CardProps){
    return(
        <div className="flex flex-col items-center justify-center w-64 rounded-lg p-0 shadow-black">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}