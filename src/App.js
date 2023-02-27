import React from 'react'
import './App.css';
import Child from "./Components/Child";


const option = {
 sedans: {
    id: 'SED',
    src: '',
    headline: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button: 'Learn more',
    
  },
 SUVs: {
    id: 'SUVs',
    src: '',
    headline: 'SUVs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    button: 'Learn more',
  },
 Luxury: {
    
    id: 'LUX',
    src: '',
    headline: 'Luxury',
    description:
      'Indulge yourself in our most luxurious vehicles, featuring top-of-the-line amenities, technology, and performance.',
    button: 'Learn more',
  },
};



function App() {
  return (
    <section className='house'>
      <section className='room1'>
      <Child
        key={option.sedans.id}
        headline={option.sedans.headline.toUpperCase()}
        description={option.sedans.description}
        icon={}
        cardColor={option.sedans.cardColor}
        buttonTextColor={option.sedans.buttonTextColor}
        btnText={option.sedans.button}
      />
      </section>
      <section className='room2'>
      <Child
        key={option.SUVs.id}
        headline={option.SUVs.headline.toUpperCase()}
       description={option.sedans.description}
        icon={}
        cardColor={option.SUVs.cardColor}
        buttonTextColor={option.SUVs.buttonTextColor}
        btnText={option.SUVs.button}
      />
      </section>
      <section className='room3'>
      <Child
        key={option.Luxury.id}
        headline={option.Luxury.headline.toUpperCase()}
        description={option.Luxury.description}
        icon={}
        cardColor={option.Luxury.cardColor}
        buttonTextColor={option.Luxury.buttonTextColor}
        btnText={option.Luxury.button}
      />
      </section>
    </section>
  );
}

export default App;
