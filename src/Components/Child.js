import React from 'react'

const choices =  [
  {
    id: 'SED',
    src: '',
    headline: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button: 'Learn more',
    cardColor: { backgroundColor: 'var(--brignt-orange)' },
    buttonTextColor: { color: 'blue' }
  },
  {
   
    id: 'SUVs',
     src:'',
    headline: 'SUVs',
    description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      button: 'Learn more',
  },
  {
    src:'',
    id: 'LUX',
    headline: 'Luxury',
    description: 'Indulge yourself in our most luxurious vehicles, featuring top-of-the-line amenities, technology, and performance.',
      button: 'Learn more',
  }
];




  function Child() {
  return (
    <div>
      {choices.map(preview => (
        <div key={preview.id}>
          <h2>{preview.headline.toUpperCase}</h2>
          <p style={{fontSize:'16px', }}>{preview.description}</p>
          <button>{preview.button}</button>
        </div>
      ))}
    </div>
  );
}


export default Child;