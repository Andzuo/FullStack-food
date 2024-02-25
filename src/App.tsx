
import { Card } from './components/card/Card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();

  return (
    <div className="flex flex-col items-center text-xl w-screen h-screen py-10 font-sans bg-zinc-800 text-white ">
      <h1 className="text-5xl font-bold font-sans">Cardápio</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {data?.map(foodData => 
          <Card
            key={foodData.id}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>
    </div>
  )
}

export default App