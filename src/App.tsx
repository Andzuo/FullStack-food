
import { useState } from 'react';
import { Card } from './components/card/Card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/CreateModal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

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
        {isModalOpen && <CreateModal/>}
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}>Adicionar</button>
    </div>
  )
}

export default App