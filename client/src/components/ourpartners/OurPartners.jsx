import React from 'react';
import './OurPartners.css'; 

const OurPartners = () => {
  const partnerLogos = [
    'https://d1h79zlghft2zs.cloudfront.net/uploads/2023/04/1454_2023.png',
    'https://drst.or.tz/wp-content/themes/drst/assets/img/logos/helpage-international-logo.png',
    'https://drst.or.tz/wp-content/themes/drst/assets/img/logos/oxfam-logo.png',
    'https://drst.or.tz/wp-content/themes/drst/assets/img/logos/unhcr-logo.png',
    'https://drst.or.tz/wp-content/themes/drst/assets/img/logos/medical-teams-logo.png'
  ];

  return (
    <div className="our-container">
      <h2>Our Partners</h2>
      <p>Disability Relief Services (DRS) Tanzania is proud to work alongside our esteemed</p>
      <p>partners who share our vision of creating an inclusive and barrier-free society for</p>
      <p>people with disabilities in Tanzania.</p>
      
      <div className="image-container">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner Logo ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
