import React from 'react';
import { Landing } from './LandingPage/Landing';
import Section2 from './LandingPage/Section-2-WhoWeAre/Section2';
import Section3 from './LandingPage/Section-3-Explore/Section3';
import Section4 from './LandingPage/Section-4-motivation/Section4';
import Section5 from './LandingPage/Section-5-OurDevs/Section5';
import Footer from './LandingPage/Footer/Footer';

const Home = () => {
  return (
    <section>
      <Landing />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </section>
  );
};
export default Home;
