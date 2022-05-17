import React from 'react';
import { Box, Spacer, Text, VStack } from '@chakra-ui/react';
import worldMap2 from '../../assets/Images/james.png';

const Section2 = () => {
  return (
    <Box
      maxW={'100%'}
      minH={'730px'}
      bgcolor={'#F8F9FC'}
      position="relative"
      bgImage={worldMap2}
      pt={20}
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '75% 25% ',
      }}
      _after={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F9FC',
        opacity: 0.93,
      }}
    >
      <VStack
        zIndex={8000}
        align="center"
        justify="center"
        minH={'60vh'}
        pt={3}
      >
        <Text
          fontWeight={600}
          fontSize={['22px', '22px', '22px', '37px']}
          lineHeight={['32px', '32px', '32px', '54px']}
          color={'#000'}
          zIndex={1000}
          w={['351px', '410px', '551px', '751px', '791px']}
          align="center"
          minH={'108px'}
          pb={9}
        >
          Creating the best <span>ice-cold!</span> experience you would never
          forget.
        </Text>

        <Text
          fontWeight={400}
          fontSize={['17px', '17px', '17px', '20px']}
          lineHeight="36px"
          color="#000"
          zIndex={1000}
          w={['351px', '420px', '551px', '751px', '791px']}
          align="center"
          minH={'108px'}
          pb={5}
        >
          Would you explore nature paradise in the world, find the best
          destination in the world with us.
        </Text>

        <Spacer />

        <Text
          fontWeight={600}
          fontSize={['22px', '22px', '22px', '37px']}
          lineHeight={'60px'}
          color={'#000'}
          zIndex={1000}
          w={'500px'}
          align="center"
          minH={'50px'}
        >
          View Regions available
        </Text>
      </VStack>
    </Box>
  );
};

export default Section2;
