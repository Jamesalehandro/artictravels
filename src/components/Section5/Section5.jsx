import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import snowboarder from '../../assets/Images/girlwithskates1.jpg';

const Section5 = () => {
  return (
    <Box
      maxW={'100%'}
      minHeight={['418px', '418px', '418px', '750px', '750px']}
      position={'relative'}
      px={20}
      pt={5}
      sx={{
        backgroundImage: `url(${snowboarder})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '60% 40%',
        position: 'relative',
      }}
      _after={{
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
      }}
    >
      <VStack
        width="100%"
        zIndex={1000}
        marginTop={['100px', '100px', '100px', '200px']}
        align={['center', 'center', 'center', 'flex-start']}
        minH={'30vh'}
        gap={10}
      >
        <Text
          fontWeight={600}
          fontSize={['22px', '22px', '22px', '56px']}
          lineHeight={['32px', '32px', '32px', '73px']}
          color={'#ffffff'}
          zIndex={1000}
          textAlign={['center', 'center', 'center', 'left']}
          w={['351px', '410px', '551px', '751px', '999px']}
        >
          View Passes We’ve Made Available For You
        </Text>

        <Button
          fontWeight={400}
          color={'#ffffff'}
          zIndex={1000}
          width={'285px'}
          height={'72px'}
          borderRadius={'10px'}
          padding={'22px, 39px, 22px, 39px'}
          backgroundColor={'#3E86F5'}
          fontSize={'14px'}
          lineHeight="21px"
          _active={{ border: 'none', transform: 'scale(.97)' }}
          _focus={{ border: 'none' }}
          _hover={{ border: 'none', bgColor: '#3E86F5' }}
          border={'none'}
        >
          View Passes
        </Button>
      </VStack>
    </Box>
  );
};

export default Section5;
