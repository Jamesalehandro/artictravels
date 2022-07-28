import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';
import Section4 from '../components/Section4/Section4';
import Section5 from '../components/Section5/Section5';
import Footer from '../components/Footer/Footer';
import Floater from '../components/Floater/Floater';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box maxWidth={'100%'} minHeight={'100vh'}>
      <NavBar />
      <Floater />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Box>
  );
};

export default Home;
