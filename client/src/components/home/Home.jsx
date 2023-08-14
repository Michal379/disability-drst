import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your custom CSS file for styling

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://i.pinimg.com/564x/e8/18/78/e818786c406c5ec8ed90c64ff2528344.jpg',
    'https://i.pinimg.com/564x/8c/c3/55/8cc3557f582379c92a3deb343d17b1b0.jpg',
    'https://i.pinimg.com/564x/bb/f3/b7/bbf3b70a0874f903ed56790399a9c7c6.jpg',
    'https://i.pinimg.com/564x/32/41/5e/32415ea2fe40d04624f5d7772c8a645a.jpg',
    'https://i.pinimg.com/564x/38/b4/85/38b4850c3d95c78547e6d32743667d4c.jpg',
    'https://i.pinimg.com/564x/9e/7a/a7/9e7aa70a9901b25c35be7030700bdddc.jpg'
  ];

  const captions = [
    'EMPOWERING PEOPLE WITH SPECIAL NEEDS\nHelping those in need find their way to a brighter future',
    'INVESTING IN ECONOMIC EMPOWERMENT\nProviding opportunities for sustainable growth and success',
    'PREVENTING HUMAN TRAFFICKING\nProtecting the vulnerable and ensuring their rights are respected',
    'IMPROVING HEALTH AND WELL-BEING\nProviding access to quality healthcare for all',
    'INVESTING IN EDUCATION\nTransforming lives through learning and development.',
    'CLIMATE JUSTICE AND RESILIENCE\nProvide youth with knowledge and tools to raise awareness and promote progressive social change.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ maxWidth: '100%', height: '700px' }}
            />
            <div className="carousel-caption-top">
              <h3 className="caption-text">{captions[index]}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* ... (carousel controls) ... */}
    </div>
  );
};

export default Home;
