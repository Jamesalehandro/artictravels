import React from 'react';
import girltourist from '../../assets/Images/girltourist.jpg';
import blackskater from '../../assets/Images/blackskater.jpg';
import blueskater from '../../assets/Images/blueskater.jpg';
import { Box, HStack, Text } from '@chakra-ui/react';

const Section3 = () => {
  return (
    <Box
      maxW={'100%'}
      minH={'900px'}
      display={'flex'}
      overflow={'hidden'}
      flexDirection={['column', 'column', 'column', 'row', 'row']}
    >
      <HStack
        w={['100%', '100%', '100%', '33.3%', '33.3%']}
        minH={'900px'}
        bgImage={girltourist}
        position={'relative'}
        justify={'flex-start'}
        align={'flex-end'}
        pb={10}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50% ',
          '@media (min-width:1440px) and (max-width:1919px)': {
            width: '33.3%',
            minHeight: '1024px',
          },
          '@media (min-width:1280px) and (max-width:1439px)': {
            width: '33.3%',
          },
          '@media (min-width:1920px)': {
            width: '33.3%',
          },
        }}
        _after={{
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={['25px', '25px', '25px', '55px']}
          lineHeight="54px"
          w={'592px'}
          textAlign={['left', 'left', 'left', 'right']}
          className="transformText"
        >
          Mountain Resort
        </Text>
      </HStack>

      <HStack
        w={['100%', '100%', '100%', '33.3%', '33.3%']}
        minH={'900px'}
        bgImage={blackskater}
        position={'relative'}
        ustify={'flex-start'}
        align={'flex-end'}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '30% 70%',
          '@media (min-width:1440px) and (max-width:1919px)': {
            width: '33.3%',
            minHeight: '1024px',
          },
          '@media (min-width:1280px) and (max-width:1439px)': {
            width: '33.3%',
          },
          '@media (min-width:1920px)': {
            width: '33.3%',
          },
        }}
        _after={{
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={['25px', '25px', '25px', '55px']}
          lineHeight="108px"
          w={'592px'}
          textAlign={['left', 'left', 'left', 'right']}
          className="transformText1"
        >
          Fuji Mountain
        </Text>
      </HStack>

      <HStack
        w={['100%', '100%', '100%', '33.3%', '33.3%']}
        minH={'900px'}
        bgImage={blueskater}
        position={'relative'}
        justify={'center'}
        align={'flex-end'}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '49% 51% ',
          '@media (min-width:1440px) and (max-width:1919px)': {
            width: '33.3%',
            minHeight: '1024px',
          },
          '@media (min-width:1280px) and (max-width:1439px)': {
            width: '33.3%',
          },
          '@media (min-width:1920px)': {
            width: '33.3%',
            backgroundPosition: '65% 35% ',
          },
        }}
        _after={{
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))',
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={['25px', '25px', '25px', '55px']}
          lineHeight="108px"
          w={'592px'}
          textAlign={['left', 'left', 'left', 'right']}
          className="transformText2"
        >
          Freezing WinterLake
        </Text>
      </HStack>
    </Box>
  );
};

export default Section3;
