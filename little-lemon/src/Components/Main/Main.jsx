import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const items = [
    {
      title: 'Greek Salad',
      imageSrc: 'greek-salad.jpg', // Replace with the actual image file path
      description: 'A delicious Greek salad made with fresh vegetables and feta cheese.',
    },
    {
      title: 'Lemon Burger',
      imageSrc: 'lemon-burger.jpg', // Replace with the actual image file path
      description: 'Our famous lemon burger served with a side of crispy fries.',
    },
    {
      title: 'Ultra Little Lemon',
      imageSrc: 'ultra-little-lemon.jpg', // Replace with the actual image file path
      description: 'The ultimate dessert - a rich lemon-flavored treat.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='main-container'>
      <div className='divider'>
        <h3>Specials</h3>
        <button className='online-mn'>Online Menu</button>
      </div>
      <div className='carousel-container'>
        <button className='prev' onClick={prevItem}>
          {`<`}
        </button>
        <div className='carousel'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`card ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={item.imageSrc} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button className='next' onClick={nextItem}>
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default Main;
