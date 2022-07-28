import React from 'react';
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoMdAirplane } from 'react-icons/io';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiUser, BiChevronDown } from 'react-icons/bi';
import { BsCalendar4 } from 'react-icons/bs';
import { RiMenu3Fill } from 'react-icons/ri';
import mountain from '../../assets/Images/mountain.jpg';
import { useState } from 'react';
import Typical from 'react-typical';

const NavBar = () => {
  // Hooks
  const [animae, setAnimae] = useState(false);

  // Functions
  const handleClick = (e) => {
    setAnimae((prev) => !prev);
    if (animae) {
      e.target.classList.add('animate__shakeX');
      e.target.classList.remove('animate__bounce');
    } else {
      e.target.classList.remove('animate__shakeX');
      e.target.classList.add('animate__bounce');
    }
  };

  return (
    <Box
      maxW={'100%'}
      minHeight={['618px', '618px', '618px', '618px', '780px']}
      px={[3, 3, 3, 5, 20]}
      pt={5}
      sx={{
        backgroundImage: `url(${mountain})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
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
          'linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%)',
      }}
    >
      <HStack w={'100%'} zIndex={1000}>
        <Flex
          w={'50%'}
          minheight={'20px'}
          gap={2}
          sx={{
            '@media (min-width:1280px) and (max-width:1439px)': {
              gap: 1,
              w: '65%',
            },
          }}
        >
          <Center
            mx={2}
            minW={['80%', '35%', '30%', '30%', '30%']}
            display="flex"
            align="center"
            justifyContent={'flex-start'}
            minheight={'20px'}
          >
            <Circle
              border={'1px dashed gray'}
              zIndex={1000}
              p={1}
              mr={3}
              cursor={'pointer'}
            >
              <IoMdAirplane className="transform" size="20px " />
            </Circle>
            <Text
              color="white"
              zIndex={1000}
              fontWeight={700}
              fontSize={['16px', '16px', '16px', '16px', '20px']}
              lineHeight={'30px'}
              cursor={'pointer'}
            >
              Arctic Travels
            </Text>
          </Center>

          <Stack
            direction={'row'}
            zIndex={1000}
            w={'50%'}
            display={['none', 'none', 'none', 'none', 'flex']}
            align="center"
            color={'white'}
            justify={'space-between'}
            fontWeight={400}
            fontSize={'12px'}
            lineHeight="21px"
            ml={5}
          >
            <Text cursor={'pointer'}>About us</Text>
            <Text cursor={'pointer'}>Support</Text>
            <Text cursor={'pointer'}>Language</Text>
          </Stack>
        </Flex>

        <Spacer />

        <Button
          width={'151px'}
          height="48px"
          padding={'14px 30px 14px 30px'}
          borderRadius={'10px'}
          backgroundColor={'white'}
          zIndex={1000}
          display={['none', 'none', 'none', 'none', 'flex']}
          fontWeight={600}
          fontSize={'14px'}
          lineHeight="21px"
          color="#3E86F5"
          _active={{ border: 'none' }}
          _focus={{ border: 'none' }}
          className={'animate__animated'}
          border={'none'}
          onClick={handleClick}
          sx={{
            _hover: {
              transform: 'scale(.97)',
            },
          }}
        >
          Sign in
        </Button>

        <Box
          zIndex={1000}
          display={['inline', 'inline', 'inline', 'inline', 'none']}
        >
          <RiMenu3Fill color="white" zIndex={1000} size={'30px'} />
        </Box>
      </HStack>

      <VStack
        maxWidth="100%"
        zIndex={1000}
        mt={20}
        align={['center', 'center', 'center', 'center', 'flex-start']}
        minH={'30vh'}
        gap={10}
      >
        <Text
          fontWeight={600}
          fontSize={['25px', '28px', '48px', '48px', '56px']}
          lineHeight={['42px', '42px', '42px', '42px', '73px']}
          color="#ffffff"
          zIndex={1000}
          textAlign="left"
          className={'animate__animated animate__backInDown'}
          mb={-10}
        >
          <Typical
            loop={Infinity}
            wrapper={'p'}
            steps={['Welcome', 5000, ' Plan the perfect winter trip', 20000]}
          />
        </Text>

        <Text
          fontWeight={400}
          fontSize={['14px', '14px', '17px', '20px', '22px']}
          lineHeight="33px"
          color="#ffffff"
          zIndex={1000}
          width={['324px', '324px', '424px', '424px', '529px']}
          textAlign={['center', 'center', 'center', 'center', 'left']}
          className={'animate__animated animate__lightSpeedInRight'}
          height="69px"
          pt={5}
        >
          Easily plan your ideal ski trip from home with the help of
          professionals
        </Text>

        <Button
          fontWeight={400}
          color="#ffffff"
          zIndex={1000}
          width={'183px'}
          height="64px"
          display={['none', 'none', 'none', 'none', 'flex']}
          borderRadius="10px"
          padding="22px, 39px, 22px, 39px"
          backgroundColor="#3E86F5"
          fontSize={'14px'}
          lineHeight="21px"
          _active={{ border: 'none' }}
          _focus={{ border: 'none' }}
          border={'none'}
          sx={{
            _hover: {
              transform: 'scale(.97)',
            },
          }}
          onClick={handleClick}
          className={'animate__animated'}
        >
          Book Here
        </Button>
      </VStack>

      {/* Absolute */}

      <HStack
        position="absolute"
        zIndex={2000}
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        w={['85%']}
        minH={'140px'}
        gap={7}
        left={['35px', '40px', '60px', '85px']}
        top={[' 340px', '340px', '340px', '550px']}
        bgColor={'white'}
        boxShadow="0px 134px 193px rgba(183, 183, 183, 0.07), 0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035)"
        borderRadius={'10px'}
        pl={[3, 3, 3, 3, 5]}
        py={[3, 3, 3, 0, 0]}
        pr={3}
        sx={{
          '@media (min-width:1280px) and (max-width:1439px)': {
            left: '120px',
            top: '700px',
            w: '1100px',
          },
          '@media (min-width:1440px) and (max-width:1980px)': {
            left: '140px',
            top: '700px',
          },
          '@media (min-width:1920px)': {
            left: '100px',
            top: '700px',
            w: '1700px',
          },
        }}
      >
        <VStack
          zIndex={2000}
          w={['100%', '100%', '100%', '20%']}
          align="flex-start"
        >
          <Flex align={'center'} gap={3}>
            <HiOutlineLocationMarker color={'#3E86F5'} size={'20px'} />
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              Location
            </Text>
          </Flex>

          <Flex
            align={'center'}
            width={'100%'}
            justify={[
              'space-between',
              'space-between',
              'space-between',
              'flex-start',
            ]}
          >
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              Iceland
            </Text>
            <BiChevronDown size={'20px'} />
          </Flex>
        </VStack>

        <VStack
          zIndex={2000}
          w={['100%', '100%', '100%', '20%']}
          align="flex-start"
        >
          <Flex align={'center'} gap={3}>
            <BiUser color={'#00C07B'} size={'20px'} />
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
              textTransform={'capitalize'}
            >
              persons
            </Text>
          </Flex>

          <Flex
            align={'center'}
            width={'100%'}
            justify={[
              'space-between',
              'space-between',
              'space-between',
              'flex-start',
            ]}
          >
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              4 Persons
            </Text>
            <BiChevronDown size={'20px'} />
          </Flex>
        </VStack>

        <VStack
          zIndex={2000}
          w={['100%', '100%', '100%', '20%']}
          align="flex-start"
        >
          <Flex align={'center'} gap={3}>
            <BsCalendar4 color={'#CC0024'} size={'20px'} />
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              CHECK IN
            </Text>
          </Flex>

          <Flex
            align={'center'}
            width={'100%'}
            justify={[
              'space-between',
              'space-between',
              'space-between',
              'flex-start',
            ]}
          >
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              12 January 2022
            </Text>
            <BiChevronDown />
          </Flex>
        </VStack>

        <VStack
          zIndex={2000}
          w={['100%', '100%', '100%', '20%']}
          align="flex-start"
        >
          <Flex align={'center'} gap={3}>
            <BsCalendar4 color={'#CC0024'} size={'20px'} />
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              CHECK OUT
            </Text>
          </Flex>

          <Flex
            align={'center'}
            width={'100%'}
            justify={[
              'space-between',
              'space-between',
              'space-between',
              'flex-start',
            ]}
          >
            <Text
              fontWeight={500}
              fontSize={'16px'}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              18 January 2022
            </Text>
            <BiChevronDown size={'20px'} />
          </Flex>
        </VStack>

        <Button
          fontWeight={400}
          color="#ffffff"
          zIndex={1000}
          className={'animate__animated'}
          onClick={handleClick}
          width={['full', 'full', 'full', '183px']}
          height="64px"
          rightIcon={<IoMdAirplane className="transform2" size={'20px'} />}
          borderRadius="10px"
          padding="22px, 39px, 22px, 39px"
          backgroundColor="#3E86F5"
          fontSize={'14px'}
          lineHeight="21px"
          _active={{ border: 'none', transform: 'scale(.97)' }}
          _focus={{ border: 'none' }}
          border={'none'}
          sx={{
            _hover: {
              transform: 'scale(.97)',
            },
          }}
        >
          Book Trip
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;
