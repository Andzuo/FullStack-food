
import { useFoodData } from './hooks/useFoodData';
import { Card } from './components/card/Card';


function App() {
  const { data } = useFoodData();

  return (
    <div className="flex items-center flex-col justify-center w-screen">
      <h1>Cardápio</h1>
      <div className="grid gird-cols-1 gap-4">
      {data?.map(foodData => 
          <Card
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