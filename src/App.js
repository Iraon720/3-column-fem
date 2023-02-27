import React from 'react';
import './App.css';
import Child from './Components/Child';
import sedans from './images/icon-sedans.svg';
import SUVs from './images/icon-suvs.svg';
import Luxury from './images/icon-luxury.svg';
const option = {
  sedans: {
    id: 'SED',
    src: sedans,
    headline: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button: 'Learn more',
  },
  SUVs: {
    id: 'SUVs',
    src: SUVs,
    headline: 'SUVs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    button: 'Learn more',
  },
  Luxury: {
    id: 'LUX',
    src: Luxury,
    headline: 'Luxury',
    description:
      'Indulge yourself in our most luxurious vehicles, featuring top-of-the-line amenities, technology, and performance.',
    button: 'Learn more',
  },
};

function App() {
  return (
    <section className='house' >
      <section
        className='room1'
        style={{ backgroundColor: 'hsl(31, 77%, 52%)' ,borderTopLeftRadius:'9px', borderBottomLeftRadius:'9px',height:'500px', width:'307px'}}
      >
        <Child
          key={option.sedans.id}
          headline={option.sedans.headline.toUpperCase()}
          description={option.sedans.description}
          icon={option.sedans.src}
          cardColor={option.sedans.cardColor}
          buttonTextColor={option.sedans.buttonTextColor}
          btnText={option.sedans.button}
        />
      </section>
      <section
        className='room2'
        style={{ backgroundColor: 'hsl(184, 100%, 22%)',borderTopLeftRadius:'9px', borderBottomLeftRadius:'9px', height:'500px', width:'307px'}}
      >
        <Child
          key={option.SUVs.id}
          headline={option.SUVs.headline.toUpperCase()}
          description={option.sedans.description}
          icon={option.SUVs.src}
          cardColor={option.SUVs.cardColor}
          buttonTextColor={option.SUVs.buttonTextColor}
          btnText={option.SUVs.button}
        />
      </section>
      <section
        className='room3'
        style={{ backgroundColor: 'hsl(179, 100%, 13%)', borderBottomRightRadius:'9px', borderTopRightRadius:'9px', height:'500px', width:'307px'}}
      >
        <Child
          key={option.Luxury.id}
          headline={option.Luxury.headline.toUpperCase()}
          description={option.Luxury.description}
          icon={option.Luxury.src}
          cardColor={option.Luxury.cardColor}
          buttonTextColor={option.Luxury.buttonTextColor}
          btnText={option.Luxury.button}
        />
      </section>
    </section>
  );
}

export default App;
