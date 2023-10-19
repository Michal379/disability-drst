import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import WhoWeAre from '../whoweare/WhoWeAre';
import WhatWeDo from '../whatwedo/WhatWeDo';
import OurPartners from '../ourpartners/OurPartners';
import Extra from '../extra/Extra'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://drc.ngo/media/zbflsoam/sudan-a-f-p.jpg?width=500&mode=crop',
    'https://i.pinimg.com/564x/8c/c3/55/8cc3557f582379c92a3deb343d17b1b0.jpg',
    'https://pro.drc.ngo/media/pmegaipv/frontpage-burkinafaso.jpg?anchor=center&mode=crop&quality=80&width=500&height=500&rnd=133057995615770000',
    'https://i.pinimg.com/564x/32/41/5e/32415ea2fe40d04624f5d7772c8a645a.jpg',
    'https://i.pinimg.com/564x/38/b4/85/38b4850c3d95c78547e6d32743667d4c.jpg',
    'https://i.pinimg.com/564x/9e/7a/a7/9e7aa70a9901b25c35be7030700bdddc.jpg'
  ];

  const captions = [
    'EMPOWERING PEOPLE WITH SPECIAL NEEDS\
    nHelping those in need find their way to a brighter future',
    'INVESTING IN ECONOMIC EMPOWERMENT\
    nProviding opportunities for sustainable growth and success',
    'PREVENTING HUMAN TRAFFICKING\
    nProtecting the vulnerable and ensuring their rights are respected',
    'IMPROVING HEALTH AND WELL-BEING\
    nProviding access to quality healthcare for all',
    'INVESTING IN EDUCATION\
    nTransforming lives through learning and development.',
    'CLIMATE JUSTICE AND RESILIENCE\
    nProvide youth with knowledge and tools to raise awareness and promote progressive social change.'
  ];

   // Separate captions with capital letters and small letters
   const capitalCaptions = captions.map((caption) => caption.split('\\n')[0]);
   const smallCaptions = captions.map((caption) => caption.split('\\n')[1]);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  
  return (
    <div className="home-container">
   <div id="carouselExampleCaptions" className="carousel slide carousel-container">
  <div className="carousel-inner">
    {images.map((image, index) => (
      <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
        <img
          src={image}
          className="d-block w-100"
          alt={`Slide ${index + 1}`}
          style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'cover' }}
        />
        <div className="carousel-caption-top">
                <h3 className="caption-text">{capitalCaptions[index]}</h3>
                <p className="caption-text-small">{smallCaptions[index]}</p>
              </div>
      </div>
    ))}
  </div>
      {/* ... (carousel controls) ... */}
    </div>

    {/* Text content below carousel */}
    <WhoWeAre />
    <WhatWeDo />
    <Extra />
    <OurPartners />
     </div>
     
    
  );
};

export default Home;
