import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import OurProjects from './components/ourProjects/OurProjects';
import ContactUs from './components/contactUs/ContactUs';
import WhoWeAre from './components/whoWeAre/WhoWeAre';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import OurProjects from './components/ourProjects/OurProjects';
import ContactUs from './components/contactUs/ContactUs';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/who-we-are" component={WhoWeAre} />
        <Route path="/what-we-do" exact component={WhatWeDo} />
        <Route path="/our-projects" exact component={OurProjects} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
