import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        {/* ... (carousel indicators, items, and controls) ... */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ maxWidth: '100%', height: '700px' }}
              />
              {/* ... (carousel caption) ... */}
            </div>
          ))}
        </div>
        {/* ... (carousel controls) ... */}
      </div>
    );
  };
  

export default Home