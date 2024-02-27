import { useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal (){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate}  = useFoodDataMutate();

    const submit = () => {
        const foodDta: FoodData = {
            title,
            price,
            image,
        }
        mutate(foodDta);
    }

  return (
    <div className="fixed inset-0  bg-slate-50 overflow-hidden h-screen w-screen flex items-center justify-center z-auto">
        <div className="bg-slate-50 p-10 h-3/5 w-3/5 rounded-sm flex items-start flex-col justify-between">
            <h2>Cadastre um novo item no cardápio</h2>
            <form>
                <Input label="title" value={title} updateValue={setTitle}/>
                <Input label="price" value={price} updateValue={setPrice}/>
                <Input label="image" value={image} updateValue={setImage}/>
            </form>
            <button onClick={submit}>Enviar</button>
        </div>
    </div>
  )
}
